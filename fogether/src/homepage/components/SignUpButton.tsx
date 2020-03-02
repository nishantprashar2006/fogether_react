import React from 'react';

interface ISignUpButtonProps {
    onClick: () => void;
}

export default function SignUpButton(props: ISignUpButtonProps) {
    return (
        <div>
            <button type="button" onClick={props.onClick}>Sign Up</button>
        </div>
    );
}
