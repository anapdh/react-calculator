import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <>
    <div className="row1">
      <Button btnName="AC" />
      <Button btnName="+/-" />
      <Button btnName="%" />
      <Button btnName="/" />
    </div>
    <div className="row2">
      <Button btnName="7" />
      <Button btnName="8" />
      <Button btnName="9" />
      <Button btnName="X" />
    </div>
    <div className="row3">
      <Button btnName="4" />
      <Button btnName="5" />
      <Button btnName="6" />
      <Button btnName="-" />
    </div>
    <div className="row4">
      <Button btnName="1" />
      <Button btnName="2" />
      <Button btnName="3" />
      <Button btnName="+" />
    </div>
    <div className="row5">
      <Button btnName="0" />
      <Button btnName="." />
      <Button btnName="=" />
    </div>
  </>
);

export default ButtonPanel;
