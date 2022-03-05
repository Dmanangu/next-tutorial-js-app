import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import { firestore, postToJSON } from "../lib/firebase";

export async function getServerSideProps() {
  const postsQuery = firestore.collectionGroup("Recipe");
  const posts = (await postsQuery.get()).docs.map(postToJSON);
  return {
    props: { posts },
  };
}

function Hello(props) {
  const [posts, setPosts] = useState(props.posts);
  const recipes = posts.filter((foodRecipe) => {
    return foodRecipe;
  });
  return (
    <div style={{ marginTop: "5%" }}>
      <div>
        <div style={{ display: "flex" }}>
          {recipes.map((info) => (
            <Card
              style={{
                borderStyle: "solid",
                height: "750px",
                width: "600px",
                marginRight: "20px",
              }}
            >
              <CardContent>
                <Typography>
                  <b>Dish Name:</b>
                  {info.dish}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography>
                  <b>Ingredients: </b>
                  {info.ingredients}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography>
                  <b>Duration: </b>
                  {info.duration}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography>
                  <b>Serving Size: </b>
                  {info.serving}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography>
                  <b>Method: </b>
                  {info.method}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hello;
