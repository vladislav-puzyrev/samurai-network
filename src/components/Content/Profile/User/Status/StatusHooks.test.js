import React from "react";
import Status from "./Status";
import {create} from "react-test-renderer";

describe('Status component', () => {
    test('статус из пропсов поступает в стейт', () => {
        const component = create(<Status status='REACT!!!'/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('REACT!!!');
    });

    // test('нету спана при создании', () => {
    //     const component = create(<Status status='REACT!!!'/>);
    //     const root = component.root;
    //     let span = root.findByType('div');
    //     expect(span).toBe(undefined);
    // });
});