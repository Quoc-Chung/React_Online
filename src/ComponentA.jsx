import React from 'react';
import ComponentB  from './ComponentB';
export default function ComponentA() {
const dulieu = "DỮ LIỆU CỦA COMPONENT A";
    return (
        <div>
        <h1>Component A</h1>
        <p>This is Component A.</p>
        <ComponentB dulieu={dulieu}></ComponentB>
        </div>
    );
}