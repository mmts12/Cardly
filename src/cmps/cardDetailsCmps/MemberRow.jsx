import React from 'react';
import Avatar from 'react-avatar';

export class MemberRow extends React.Component {

    state = {

    }
    render() {
        return (
            <section className="member-row flex ">
                <Avatar value="50%" size="20" round="true" name="Adi Magori" />
                <p>Adi Magori</p>
                <p>(adimagori1)</p>
            </section>
        )
    }
}

