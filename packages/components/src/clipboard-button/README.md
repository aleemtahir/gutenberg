# ClipboardButton

## Usage

```jsx
import { ClipboardButton } from '@wordpress/components';
import { withState } from '@wordpress/compose';

const MyClipboardButton = withState( {
	hasCopied: false,
} )( ( { hasCopied, setState } ) => ( 
	<ClipboardButton
		isPrimary
		text="Text to be copied."
		onCopy={ () => setState( { hasCopied: true } ) }
		onFinishCopy={ () => setState( { hasCopied: false } ) }
	>
		{ hasCopied ? 'Copied!' : 'Copy Text' }
	</ClipboardButton>
) )
```
