import React, { Component } from 'react';

/*
    displayContact = contactObj => <div>
        <img src={ require(contactObj.avatarURL)} />
        <p>{ contactObj.id }</p>
        <p> { contactObj.name }</p>
        <p> { contactObj.handle } </p>
    </div>;

    createList = list => list.map((contact) => <li> { displayContact(contact) } </li>);

    listTheList = ReactDOM.createElement('ul', null, createList);

    displayList = <div> { listTheList } </div>;
 */
class ListContacts extends Component {
    render() {
        return (
            <div>
                <ol className='contact-list'>
                    {this.props.contacts.map((contact) => {
                        return (
                            <li key={ contact.id } className='contact-list-item'>
                                <div
                                    className='contact-avatar'
                                    style={{
                                        backgroundImage:`url(${contact.avatarURL})`
                                    }}></div>
                                <div className='contact-details'>
                                    <p>{contact.name}</p>
                                    <p>{contact.handle}</p>
                                </div>
                            </li>
                        )})
                    }
                </ol>
            </div>
        )
    }

}

export default ListContacts;