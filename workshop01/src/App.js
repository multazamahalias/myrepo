import React, { useState, useEffect } from "react";
import { Container, Link, Table, TableBody, TableRow, TableCell } from '@material-ui/core';

import tulip from './tulip.png';
import './App.css';

const App = () => {

  const [text, setText] = useState('test');

  function returnText() {
    let text1 = "Logic will get you from A to B. Imagination will take you everywhere.";
    let text2 = "There are 10 kinds of people. Those who know binary and those who don't.";
    let text3 = "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.";
    let text4 = "It's not that I'm so smart, it's just that I stay with problems longer.";
    let text5 = "It is pitch dark. You are likely to be eaten by a grue.";

    let randomNo = Math.floor((Math.random() * 5) + 1);
    var selectedText;
    switch(randomNo) {
      case 1:
        selectedText = text1;
        break;
      case 2:
        selectedText = text2;
        break;
      case 3:
        selectedText = text3;
        break;
      case 4:
        selectedText = text4;
        break;
      case 5:
        selectedText = text5;
        break;
      default:
        selectedText = ''
    }

    setText(selectedText);
  }

  useEffect(() => {
    returnText();
  }, [])

  return (
    <div className="App">
      <div className="App-header">
        Landing Page
      </div>

      <Container className="Box" maxWidth="sm">
        <Table>
          <TableBody>

            <TableRow>
              <TableCell>
                <img src={tulip} className="App-logo" alt="logo" />
              </TableCell>

              <TableCell>
                <label className="Dynamic-text">
                  {text? text : ""}
                </label>
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>
        
        <p>
          Repository&nbsp;
          <Link href="https://github.com/multazamahalias/myrepo" underline="always">
            https://github.com/multazamahalias/myrepo</Link>
        </p>
      </Container>
    </div>
  );

}

export default App;
