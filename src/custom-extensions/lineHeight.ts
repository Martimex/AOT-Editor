import type { RawCommands } from "@tiptap/core";
import { Extension } from "@tiptap/core";

export const LineHeight = Extension.create({
    name: "lineHeight",
    addGlobalAttributes() {
        return [{
            types: ["paragraph"],
            attributes: {
            lineHeight: {
                default: null,
                parseHTML: (element) => element.style.lineHeight,
                renderHTML: (attributes) => {
                    if (!attributes.lineHeight) { return {}; }
                    return { style: `line-height: ${attributes.lineHeight}` };
                },
            },
            },
        }];
    },
    addCommands(): any {
        return {
        setLineHeight:
            (lineHeight: string) =>
            ({ commands }: { commands: RawCommands}) => {
            return commands.updateAttributes("paragraph", {
                lineHeight,
            });
            },
        };
    },
});