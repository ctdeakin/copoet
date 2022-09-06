import { useEditor, EditorContent } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import React from 'react'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      Document, 
      Paragraph,
      Text
    ],
    content: '<p></p>',
  })

  return (
    <EditorContent editor={editor} />
  )
}

export default Tiptap