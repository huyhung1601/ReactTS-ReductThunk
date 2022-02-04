import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import CustomHookComponent from './components/hooks/CustomHookComponent';
import TestComponent from './components/hooks/EvenMoreReactComponent';
import UseContextComponent from './components/hooks/UseContextComponent';
import UseEffectComponent from './components/hooks/UseEffectComponent';
import UseReducerComponent from './components/hooks/UseReducerComponent';
import UseRefComponet from './components/hooks/UseRefComponet';
import List from './components/List';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './redux';
export interface IState {
  people:{
    name: string,
    age: number,
    url: string,
    note?: string 
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Henry",
      age: 25,
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: 'Allegeric to staying on the same team'
    }
  ])

  const dispatch = useDispatch()

  const {depositMoney, withdrawMoney,bankrupt} =bindActionCreators(actionCreators,dispatch)
  const amount = useSelector((state: State)=> state.bank)
  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={()=> depositMoney(1000)}>Deposit</button>
      <button onClick={()=> withdrawMoney(500)}>Withdraw</button>
      <button onClick={()=> bankrupt()}>Bankrupt</button>
     {/* <h1>People invited to the party</h1>
     <List people={people}/>
     <AddToList people={people} setPeople={setPeople}/> */}

     {/* <h1>react component</h1>
     <TestComponent/>
     <h1>custom hook</h1>
     <CustomHookComponent/>
     <h1>useRef</h1>
     <UseRefComponet/>
     <h1>useEffect</h1>
     <UseEffectComponent/>
     <h1>useContext</h1>
     <UseContextComponent/>
     <h1>useReducer</h1>
     <UseReducerComponent/> */}
    </div>
  );
}

export default App;
