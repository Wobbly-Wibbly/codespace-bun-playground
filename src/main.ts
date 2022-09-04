export function main() {
    console.log("Hello via Bun!");
    Bun.serve({
        fetch(req) {
            return new Response("Hello via Bun.js!");
        },
    });
}