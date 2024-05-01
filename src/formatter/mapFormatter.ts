import fs from 'fs/promises';
import path from 'path';

// Function to recursively find all TypeScript files
async function findTsFiles(dir: string, fileList: string[] = []): Promise<string[]> {
    const files = await fs.readdir(dir, { withFileTypes: true });
    for (const file of files) {
        const filePath = path.join(dir, file.name);
        if (file.isDirectory()) {
            await findTsFiles(filePath, fileList);
        } else if (filePath.endsWith('.ts')) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

// Function to format a single TypeScript file
async function formatFile(filePath: string): Promise<void> {
    let fileContent = await fs.readFile(filePath, 'utf8');
    const lines = fileContent.split('\n');
    const mapStartIndex = lines.findIndex(line => line.includes('new Map(['));
    const mapEndIndex = lines.findIndex(line => line.includes(']);'), mapStartIndex);

    if (mapStartIndex !== -1 && mapEndIndex !== -1) {
        const mapEntries = lines.slice(mapStartIndex + 1, mapEndIndex);
        const longestKeyLength = Math.max(...mapEntries.map(entry => entry.trim().split(',')[0].trim().length));

        for (let i = 0; i < mapEntries.length; i++) {
            const [key, value] = mapEntries[i].split(',');
            lines[mapStartIndex + 1 + i] = `        [${key.trim().padEnd(longestKeyLength, ' ')} ,${value.trim()}],`;
        }

        fileContent = lines.join('\n');
        await fs.writeFile(filePath, fileContent, 'utf8');
        console.log(`Formatted file: ${filePath}`);
    }
}

// Main function to run the formatting process
async function main(): Promise<void> {
    const directoryPath = path.join(process.cwd(), 'src'); // Change 'src' to your specific directory
    const tsFiles = await findTsFiles(directoryPath);
    for (const file of tsFiles) {
        await formatFile(file);
    }
    console.log('All files have been processed.');
}

main().catch(console.error);
