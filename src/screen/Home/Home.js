import React, { Component } from 'react';
import T from 'prop-types';
import { withTheme } from 'styled-components';
import Button from 'common/components/Button';

const articlesData = [
  {
    id: 1,
    price: 12,
    title: 'Yuzu',
    shortDescription: 'Du yuzu pas frais',
    image: 'http://lorempixel.com/400/300/animals/',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet justo a tempor fermentum. Integer sit amet luctus mi, a congue felis. Vestibulum a dolor ac massa volutpat cursus. Fusce in libero id nibh accumsan volutpat. Praesent imperdiet orci nec justo ullamcorper suscipit. Curabitur molestie dolor dui, a accumsan nisi blandit in. Donec lorem orci, ullamcorper sed finibus nec, accumsan non arcu. ',
  },
  {
    id: 2,
    price: 132,
    title: 'Whisky single malt',
    shortDescription: "22 ans d'ages pur malt écossais",
    image: 'http://lorempixel.com/400/300/animals/',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet justo a tempor fermentum. Integer sit amet luctus mi, a congue felis. Vestibulum a dolor ac massa volutpat cursus. Fusce in libero id nibh accumsan volutpat. Praesent imperdiet orci nec justo ullamcorper suscipit. Curabitur molestie dolor dui, a accumsan nisi blandit in. Donec lorem orci, ullamcorper sed finibus nec, accumsan non arcu. ',
  },
  {
    id: 3,
    price: 2,
    title: 'Octodon',
    shortDescription: 'Animal paisible qui vous rendra heureux et détendu.',
    image: 'http://lorempixel.com/400/300/animals/',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet justo a tempor fermentum. Integer sit amet luctus mi, a congue felis. Vestibulum a dolor ac massa volutpat cursus. Fusce in libero id nibh accumsan volutpat. Praesent imperdiet orci nec justo ullamcorper suscipit. Curabitur molestie dolor dui, a accumsan nisi blandit in. Donec lorem orci, ullamcorper sed finibus nec, accumsan non arcu. ',
  },
  {
    id: 4,
    price: 7,
    title: 'Isco',
    shortDescription: 'nard',
    image: 'http://lorempixel.com/400/300/animals/',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet justo a tempor fermentum. Integer sit amet luctus mi, a congue felis. Vestibulum a dolor ac massa volutpat cursus. Fusce in libero id nibh accumsan volutpat. Praesent imperdiet orci nec justo ullamcorper suscipit. Curabitur molestie dolor dui, a accumsan nisi blandit in. Donec lorem orci, ullamcorper sed finibus nec, accumsan non arcu. ',
  },
  {
    id: 5,
    price: 55,
    title: 'Jackda',
    shortDescription: '1.5l de jackda sisi',
    image: 'http://lorempixel.com/400/300/animals/',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet justo a tempor fermentum. Integer sit amet luctus mi, a congue felis. Vestibulum a dolor ac massa volutpat cursus. Fusce in libero id nibh accumsan volutpat. Praesent imperdiet orci nec justo ullamcorper suscipit. Curabitur molestie dolor dui, a accumsan nisi blandit in. Donec lorem orci, ullamcorper sed finibus nec, accumsan non arcu. ',
  },
  {
    id: 6,
    price: 72,
    title: 'red dead',
    shortDescription: 'redemption',
    image: 'http://lorempixel.com/400/300/animals/',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet justo a tempor fermentum. Integer sit amet luctus mi, a congue felis. Vestibulum a dolor ac massa volutpat cursus. Fusce in libero id nibh accumsan volutpat. Praesent imperdiet orci nec justo ullamcorper suscipit. Curabitur molestie dolor dui, a accumsan nisi blandit in. Donec lorem orci, ullamcorper sed finibus nec, accumsan non arcu. ',
  },
  {
    id: 7,
    price: 18,
    title: 'ca mfane',
    shortDescription: "d'écrire des trucs différents",
    image: 'http://lorempixel.com/400/300/animals/',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet justo a tempor fermentum. Integer sit amet luctus mi, a congue felis. Vestibulum a dolor ac massa volutpat cursus. Fusce in libero id nibh accumsan volutpat. Praesent imperdiet orci nec justo ullamcorper suscipit. Curabitur molestie dolor dui, a accumsan nisi blandit in. Donec lorem orci, ullamcorper sed finibus nec, accumsan non arcu. ',
  },
  {
    id: 8,
    price: 2,
    title: 'mais si tu savais',
    shortDescription: '.................',
    image: 'http://lorempixel.com/400/300/animals/',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet justo a tempor fermentum. Integer sit amet luctus mi, a congue felis. Vestibulum a dolor ac massa volutpat cursus. Fusce in libero id nibh accumsan volutpat. Praesent imperdiet orci nec justo ullamcorper suscipit. Curabitur molestie dolor dui, a accumsan nisi blandit in. Donec lorem orci, ullamcorper sed finibus nec, accumsan non arcu. ',
  },
  {
    id: 9,
    price: 5654,
    title: 'piano droit',
    shortDescription: 'Yamaha B3 tout neuf',
    image: 'http://lorempixel.com/400/300/animals/',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet justo a tempor fermentum. Integer sit amet luctus mi, a congue felis. Vestibulum a dolor ac massa volutpat cursus. Fusce in libero id nibh accumsan volutpat. Praesent imperdiet orci nec justo ullamcorper suscipit. Curabitur molestie dolor dui, a accumsan nisi blandit in. Donec lorem orci, ullamcorper sed finibus nec, accumsan non arcu. ',
  },
  {
    id: 10,
    price: 102110,
    title: 'Lanborghini Gallardo',
    shortDescription: 'V6 540cv',
    image: 'http://lorempixel.com/400/300/animals/',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet justo a tempor fermentum. Integer sit amet luctus mi, a congue felis. Vestibulum a dolor ac massa volutpat cursus. Fusce in libero id nibh accumsan volutpat. Praesent imperdiet orci nec justo ullamcorper suscipit. Curabitur molestie dolor dui, a accumsan nisi blandit in. Donec lorem orci, ullamcorper sed finibus nec, accumsan non arcu. ',
  },
  {
    id: 11,
    price: 100000000,
    title: 'Formation dev',
    shortDescription: 'Le prix de ta formation de dev :D',
    image: 'http://lorempixel.com/400/300/animals/',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet justo a tempor fermentum. Integer sit amet luctus mi, a congue felis. Vestibulum a dolor ac massa volutpat cursus. Fusce in libero id nibh accumsan volutpat. Praesent imperdiet orci nec justo ullamcorper suscipit. Curabitur molestie dolor dui, a accumsan nisi blandit in. Donec lorem orci, ullamcorper sed finibus nec, accumsan non arcu. ',
  },
  {
    id: 12,
    price: 1,
    title: 'Cobaye',
    shortDescription: 'Le prix du foin digéré par cette machine à poop',
    image: 'http://lorempixel.com/400/300/animals/',
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet justo a tempor fermentum. Integer sit amet luctus mi, a congue felis. Vestibulum a dolor ac massa volutpat cursus. Fusce in libero id nibh accumsan volutpat. Praesent imperdiet orci nec justo ullamcorper suscipit. Curabitur molestie dolor dui, a accumsan nisi blandit in. Donec lorem orci, ullamcorper sed finibus nec, accumsan non arcu. ',
  },
];

class Home extends Component {
  static propTypes = {
    theme: T.any,
  };

  static defaultProps = {
    theme: null,
  };

  render() {
    const { theme } = this.props;

    return (
      <div>
        <Button>Test color by default</Button>
        <Button bg={theme.colors.primary}>Test with theme color</Button>
      </div>
    );
  }
}

export default withTheme(Home);
