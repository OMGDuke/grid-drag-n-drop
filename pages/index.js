import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Tester from '../components/Tester';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const components = { tester: Tester };

const generateLayout = () =>
  _.map(_.range(0, 5), (item, i) => {
    const y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: (_.random(0, 5) * 3) % 12,
      y: Math.floor(i / 6) * y,
      w: 3,
      h: y,
      component: 'tester',
      args: { text: 'Wow' },
    };
  });

class Home extends React.Component {
  static defaultProps = {
    className: 'layout',
    rowHeight: 30,
    onLayoutChange() {},
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    initialLayout: generateLayout(),
  };

  constructor(props) {
    super(props);
    this.state = {
      currentBreakpoint: 'lg',
      compactType: 'vertical',
      layouts: { lg: props.initialLayout },
    };
  }

  onBreakpointChange = breakpoint => {
    this.setState({
      currentBreakpoint: breakpoint,
    });
  };

  onLayoutChange = (layout, layouts) => {
    const { onLayoutChange } = this.props;
    onLayoutChange(layout, layouts);
  };

  generateDOM() {
    const { layouts } = this.state;
    return _.map(layouts.lg, (l, i) => {
      const Component = components[l.component];
      const props = l.args;
      return (
        <div key={i}>
          <Component {...props} />
        </div>
      );
    });
  }

  render() {
    const { currentBreakpoint, compactType, layouts } = this.state;
    const { cols } = this.props;
    return (
      <HomeContainer>
        <div>
          Current Breakpoint: {currentBreakpoint} ({cols[currentBreakpoint]}{' '}
          columns)
        </div>
        <ResponsiveReactGridLayout
          {...this.props}
          layouts={layouts}
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          measureBeforeMount
          compactType={compactType}
        >
          {this.generateDOM()}
        </ResponsiveReactGridLayout>
      </HomeContainer>
    );
  }
}

const HomeContainer = styled.div`
  .react-grid-layout {
    position: relative;
    transition: height 200ms ease;
  }
  .react-grid-item {
    transition: all 200ms ease;
    transition-property: left, top;
  }
  .react-grid-item.cssTransforms {
    transition-property: transform;
  }
  .react-grid-item.resizing {
    z-index: 1;
    will-change: width, height;
  }

  .react-grid-item.react-draggable-dragging {
    transition: none;
    z-index: 3;
    will-change: transform;
  }

  .react-grid-item.react-grid-placeholder {
    background: red;
    opacity: 0.2;
    transition-duration: 100ms;
    z-index: 2;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  .react-grid-item > .react-resizable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: 0;
    right: 0;
    cursor: se-resize;
  }

  .react-grid-item > .react-resizable-handle::after {
    content: '';
    position: absolute;
    right: 3px;
    bottom: 3px;
    width: 5px;
    height: 5px;
    border-right: 2px solid rgba(0, 0, 0, 0.4);
    border-bottom: 2px solid rgba(0, 0, 0, 0.4);
  }
  body {
    background: white;
    padding: 20px;
    overflow: scroll;
  }
  #content {
    width: 100%;
  }
  .react-grid-layout {
    background: #eee;
  }
  .columns {
    -moz-columns: 120px;
    -webkit-columns: 120px;
    columns: 120px;
  }
  .react-grid-item {
    box-sizing: border-box;
  }
  /* .react-grid-item:not(.react-grid-placeholder) {
    background: #4fd;
    border: 1px solid black;
  } */
  .react-grid-item.resizing {
    opacity: 0.9;
  }
  .react-grid-item .text {
    font-size: 24px;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 24px;
  }
  .react-grid-item .minMax {
    font-size: 12px;
  }
  .react-grid-item .add {
    cursor: pointer;
  }
  .react-grid-dragHandleExample {
    cursor: move; /* fallback if grab cursor is unsupported */
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
  }
  li b {
    font-size: 19px;
    line-height: 14px;
  }

  .toolbox {
    background-color: #dfd;
    width: 100%;
    height: 120px;
    overflow: scroll;
  }

  .hide-button {
    cursor: pointer;
    position: absolute;
    font-size: 20px;
    top: 0px;
    right: 5px;
  }

  .toolbox__title {
    font-size: 24px;
    margin-bottom: 5px;
  }
  .toolbox__items {
    display: block;
  }
  .toolbox__items__item {
    display: inline-block;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    padding: 10px;
    margin: 5px;
    border: 1px solid black;
    background-color: #ddd;
  }
`;

export default Home;
