import React from 'react';
import ColorContext from '../contexts/color';
// import { ColorConsumer } from '../contexts/color';

// const ColorContext = createContext({
//   state: { color: "black", subcolor: "red" },
//   actions: {
//     setColor: () => {},
//     setSubcolor: () => {},
//   },
// });

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// const SelectColors = () => {
//   return (
//     <div>
//       <h2>색상을 선택하세요.</h2>
//       <ColorConsumer>
//         {({ actions }) => (
//           <div style={{ display: 'flex' }}>
//             {colors.map((color) => (
//               <div
//                 key={color}
//                 style={{
//                   background: color,
//                   width: '24px',
//                   height: '24px',
//                   cursor: 'pointer',
//                 }}
//                 onClick={() => actions.setColor(color)}
//                 onContextMenu={(e) => {
//                   e.preventDefault();
//                   actions.setSubcolor(color);
//                 }}
//               />
//             ))}
//           </div>
//         )}
//       </ColorConsumer>
//       <hr />
//     </div>
//   );
// };

class SelectColors extends React.Component {
  static contextType = ColorContext;
  handleSetColor = (color) => {
    this.context.actions.setColor(color);
  };
  handleSetSubcolor = (subcolor) => {
    this.context.actions.setSubcolor(subcolor);
  };
  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        <div style={{ display: 'flex' }}>
          {colors.map((color) => (
            <div
              key={color}
              style={{
                background: color,
                width: '24px',
                height: '24px',
                cursor: 'pointer',
              }}
              onClick={() => this.handleSetColor(color)}
              onContextMenu={(e) => {
                e.preventDefault();
                this.handleSetSubcolor(color);
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SelectColors;
