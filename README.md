# React-Shape-Layout

React-Shape-Layout is a versatile React library that simplifies the process of arranging components in various shapes, with a primary emphasis on circular layouts. Whether you're designing captivating
visualizations, unique user interfaces, or engaging animations, React-Shape-Layout provides a powerful toolset to streamline the process while seamlessly integrating with your React projects.

![React-Shape-Layout Demo](demo.gif)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [CircleLayout](#circlelayout)
- [Documentation](#documentation)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Features

- **CircleLayout:** Arrange React components in a circular layout with customizable radius, spacing, and alignment options.
- **PolygonLayout:** Create polygonal arrangements by specifying the number of sides, allowing you to achieve unique designs.
- **Fine-tuning:** Adjust the position, spacing, and alignment of components for pixel-perfect designs.
- **Responsive:** Create responsive designs by utilizing React-Shape-Layout within media queries or dynamic contexts.
- **Intuitive API:** The library provides a straightforward and React-friendly API, making integration seamless.
- **Limitless Creativity:** Experiment with a wide range of shapes, layouts, and design possibilities.

## Installation

You can install React-Shape-Layout using npm or yarn:

```bash
npm install react-shape-layout
```

or

```bash
yarn add react-shape-layout
```

## Usage

### CircleLayout

Arrange components in a circular layout:

```js
import React from 'react';
import { CircleLayout } from 'react-shape-layout';
import 'react-shape-layout/dist/cjs/index.css';

const MyCircularComponent = () => {
  return (
    <CircleLayout radius={150}>
      <div className="circle-item">Item 1</div>
      <div className="circle-item">Item 2</div>
      <div className="circle-item">Item 3</div>
    </CircleLayout>
  );
};

export default MyCircularComponent;
```

## Documentation

For detailed usage instructions, API documentation, and advanced examples, please refer to the official documentation.

## Examples

Explore a variety of usage examples in the examples directory of this repository.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
