import React from 'react';
import { Editor, EditorState, Modifier} from 'draft-js';
import { getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';
const { hasCommandModifier } = KeyBindingUtil;
import { completeMe } from '../../database/routes';

export default function MyEditor() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  function callAIKeyBinding(e) {
    if (e.key === 'Enter' && hasCommandModifier(e)) {
      return 'call-ai';
    }
    return getDefaultKeyBinding(e);
  }

 function handleKeyCommand(command) {
    if (command === 'call-ai') {
      let contentState = editorState.getCurrentContent();
      Modifier.replaceText(contentState, editorState.getSelection(), 'another test')
      setEditorState(
        editorState.push(editorState, contentState, 'insert-fragment')
      )
      return 'handled';
    }
    return 'not-handled';
  }

  return (
    <Editor
      editorState={editorState}
      onChange={setEditorState}
      handleKeyCommand={handleKeyCommand}
      keyBindingFn={callAIKeyBinding}
    />
  );
}
