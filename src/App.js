import React, { Component } from 'react';
import ContactUsButton from './contactUsButton'
import LanguageSelector from './LanguageSelector';

class App extends Component {
    render() {
        return (
            <div>
                <ContactUsButton />
                <LanguageSelector />
            </div>
        )
    }
}

export default App;