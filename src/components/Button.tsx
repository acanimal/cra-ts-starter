import * as React from 'react';
const { Component } = React;

/**
 * Button properties.
 */
export interface IButtonProps {
  /** prop1 description */
  prop1?: string;
  /** prop2 description */
  prop2: number;
  /**
   * prop3 description
   */
  prop3: () => void;
  /** prop4 description */
  prop4: 'option1' | 'option2' | 'option3';

  onClick: () => void;
}

/**
 * Form column.
 */
export class Button extends Component<IButtonProps, {}> {
  render() {
    return <button>Test</button>;
  }
}
