import Thing from '../src/Thing';
import { expect } from 'chai';

describe('Thing', () => {
  it('Should save its name', () => {
    let a: Thing = new Thing("bob");    
    
    expect(a.name).to.equal('bob');
  })
});