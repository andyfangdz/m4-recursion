// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";
import CodeSlide from 'spectacle-code-slide';
import TreeViz from './treeviz';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const sortTree = [
  {
    "name": "[3, 2, 5, 1, 4] => [1, 2, 3, 4, 5]",
    "parent": "null",
    "_children": [
      {
        "name": "[2, 1] => [1, 2]",
        "parent": "[3, 2, 5, 1, 4] => [1, 2, 3, 4, 5]",
        "_children": [
          {
            "name": "[1] => [1]",
            "parent": "[2, 1] => [1, 2]"
          },
          {
            "name": "[2] => [2]",
            "parent": "[2, 1] => [1, 2]"
          }
        ]
      },
      {
        "name": "[5, 4] => [4, 5]",
        "parent": "[3, 2, 5, 1, 4] => [1, 2, 3, 4, 5]",
        "_children": [
          {
            "name": "[4] => [4]",
            "parent": "[5, 4] => [4, 5]"
          },
          {
            "name": "[5] => [5]",
            "parent": "[5, 4] => [4, 5]"
          }
        ]
      }
    ],
    "children": null
  }
]

const linkedListTree = [
  {
    "name": "head",
    "parent": "null",
    "children": null,
    "_children": [
      {
        "name": "head.next",
        "parent": "head",
        "children": null,
        "_children": [
          {
            "name": "(head.next).next",
            "parent": "head.next",
            "children": null
          }
        ]
      }
    ]
  }
]

const treeTree = [
  {
    "name": "root",
    "parent": "null",
    "children": null,
    "_children": [
      {
        "name": "root.left",
        "parent": "root",
        "children": null,
        "_children": [
          {
            "name": "..left",
            "parent": "root.left",
            "children": null
          }, {
            "name": "..right",
            "parent": "root.left",
            "children": null
          }
        ]
      },
      {
        "name": "root.right",
        "parent": "root",
        "children": null,
        "_children": [
          {
            "name": "..left",
            "parent": "root.right",
            "children": null
          }, {
            "name": "..right",
            "parent": "root.right",
            "children": null
          }
        ]
      }
    ]
  }
]

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps>
              Divide and Conquer, Recursion
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px">Dezhi “Andy” Fang ,GT TIP</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Heading size={2} fit caps>
              Story Time!
            </Heading>
            <List>
              <Appear><ListItem>70+ Graded Papers</ListItem></Appear>
              <Appear><ListItem>5 minutes</ListItem></Appear>
              <Appear><ListItem>How to sort?</ListItem></Appear>
              <Appear><ListItem>Abusing your friends.</ListItem></Appear>
              <Appear><ListItem>Divide-Conquer-Combine</ListItem></Appear>
              <Appear><ListItem>Fast forward to now...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>I have no idea what quicksort is.</Quote>
              <Cite>Nervous Interviewee</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]}>
            <CodePane
              lang="python"
              source={require("raw!../assets/easy-quicksort.py")}
              margin="20px auto"
              style={{fontSize: "0.7em"}}
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="... This is not quicksort">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>
          <Slide transition={["slide"]}>
            <CodePane
              lang="python"
              source={require("raw!../assets/hard-quicksort.py")}
              margin="20px auto"
            />
          </Slide>
          <CodeSlide
            transition={[]}
            lang="python"
            code={require("raw!../assets/easy-quicksort.py")}
            ranges={[
              {loc: [0, 10], title: "Walking through"},
              {loc: [1, 3], title: "The Obvious", note: "sort([]) => [], sort([a]) => [a]"},
              {loc: [3, 7], title: "The Partition (Divide)"},
              {loc: [7, 9], title: "The Sort (Conquer)"},
              {loc: [9, 10], title: "The Concat (Combine)"},
              {loc: [0, 10], title: 'That\'s all!'}
              // ...
            ]}/>
          <Slide transition={["slide"]} bgColor="white">
            <TreeViz graphId="sort-tree" treeData={sortTree}/>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={2} fit caps>
              Recursive Data Structures
            </Heading>
            <List>
              <Appear><ListItem>E.g., Linked List, Trees</ListItem></Appear>
              <Appear>
                <ListItem>
                  <Layout>
                    <Fill>
                      <TreeViz graphId="general-tree1" treeData={linkedListTree} width={500} height={500} />
                    </Fill>
                    <Fill>
                      <TreeViz graphId="general-tree2" treeData={treeTree} width={500} height={500} />
                    </Fill>
                  </Layout>
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            {/*<Heading caps fit size={1} textColor="primary">*/}
              {/*Exercises*/}
            {/*</Heading>*/}
            <Markdown>
              {`
1. Given a binary tree, find its maximum depth.

2. You have two every large binary trees: \`T1\`,
with millions of nodes, and \`T2\`, with hundreds of nodes.
Create an algorithm to decide if \`T2\` is a subtree of \`T1\`.

3. Calculate the \`a^n % b\` where \`a\`, \`b\` and \`n\` are all 32bit integers.
              `}
            </Markdown>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
