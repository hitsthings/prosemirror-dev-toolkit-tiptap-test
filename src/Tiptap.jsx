import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { applyDevTools } from 'prosemirror-dev-toolkit';
import { useEffect } from 'react';

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello Worlds! 🌎️</p>",
  });

  useEffect(() => {
    if (editor) {
      applyDevTools(editor.view)
    }
  }, [editor])

  return <EditorContent editor={editor} />;
};

export default Tiptap;
