/**
 * WordPress dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import { Modal, KeyboardShortcuts } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { rawShortcut } from '@wordpress/keycodes';

/**
 * Internal dependencies
 */
import {
	globalShortcuts,
	selectionShortcuts,
	blockShortcuts,
	slashInserterShortcuts,
	textFormattingShortcuts,
} from './config';

const ShortcutList = ( { shortcuts } ) => (
	<dl className="editor-keyboard-shortcut-help__shortcut-list">
		{ shortcuts.map( ( { key, description }, index ) => (
			<Fragment
				key={ index }
			>
				<dt className="editor-keyboard-shortcut-help__shortcut-key">
					{ key }
				</dt>
				<dd className="editor-keyboard-shortcut-help__shortcut-description">
					{ description }
				</dd>
			</Fragment>
		) ) }
	</dl>
);

const ShortcutSection = ( { title, description, shortcuts } ) => (
	<section>
		<h2>{ title }</h2>
		<p>{ description }</p>
		<ShortcutList shortcuts={ shortcuts } />
	</section>
);

class KeyboardShortcutHelpModal extends Component {
	constructor( ...args ) {
		super( ...args );

		this.toggleModalVisibility = this.toggleModalVisibility.bind( this );

		this.state = {
			isModalVisible: false,
		};
	}

	toggleModalVisibility() {
		const isModalVisible = ! this.state.isModalVisible;
		this.setState( {
			isModalVisible,
		} );
	}

	render() {
		return (
			<Fragment>
				<KeyboardShortcuts
					bindGlobal
					shortcuts={ {
						[ rawShortcut.primary( '/' ) ]: this.toggleModalVisibility,
					} }
				/>
				{ this.state.isModalVisible && (
					<Modal
						className="editor-keyboard-shortcut-help"
						title={ __( 'Keyboard Shortcuts' ) }
						closeLabel={ __( 'Close' ) }
						onRequestClose={ this.toggleModalVisibility }
					>

						<ShortcutSection { ...globalShortcuts } />
						<ShortcutSection { ...selectionShortcuts } />
						<ShortcutSection { ...blockShortcuts } />
						<ShortcutSection { ...slashInserterShortcuts } />
						<ShortcutSection { ...textFormattingShortcuts } />

					</Modal>
				) }
			</Fragment>
		);
	}
}

export default KeyboardShortcutHelpModal;
