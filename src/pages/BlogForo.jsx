import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { HeaderNormal } from "../components/Header-normal";
import { BASE_URL } from "../hooks/fetch";

import "../styles/BlogForo.css";
export const BlogForo = () => {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  const nav = useNavigate();
  const [posts, setPosts] = useState([]);
  const [setted, setSetted] = useState(false);
  const [dataSelected, setDataSelected] = useState({});
  async function getPosts() {
    try {
      const params = {
        _cacheBuster: new Date().getTime(),
      };
      const res = await axios.get(`${BASE_URL}forum/posts/`, {
        params: params,
      });
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getComments() {
    try {
      const params = {
        _cacheBuster: new Date().getTime(),
      };
      const res = await axios.get(
        `${BASE_URL}forum/comments/?postid=${data.filtro}`,
        { params: params }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
    getComments();
  }, []);

  async function onSubmit(data) {
    try {
      const params = {
        _cacheBuster: new Date().getTime(),
      };
      const res = await axios.get(
        `${BASE_URL}forum/filterpost/?filtro=${data.filtro}`,
        { params: params }
      );
      console.log(res.data);
      setPosts(res.data);
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  }

  async function onSubmitComment(data, post) {
    try {
      const token = localStorage.getItem("access");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.post(
        `${BASE_URL}forum/comments/`,
        { text: data.comment, post_id: post.id },
        {
          headers: headers,
        }
      );
  
      if (response.status === 201) {
        console.log(response.data);
        window.location.reload();
      } else {
        console.log("Error en la solicitud:", response.statusText);
      }
    } catch (error) {
      console.error("Error al enviar el comentario:", error);
  
      if (error.response && error.response.status === 401) {
        nav("/login");
      }
    }
  }
  

  return (
    <React.Fragment>
      <div className="header">
        <HeaderNormal></HeaderNormal>
      </div>

      <div className="containerForoBlog">
        <div className="formBuscar">
          <form onSubmit={handleSubmit(onSubmit)}>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/search--v1.png"
              alt="search--v1"
            />
            <input
              type="text"
              placeholder="Busca un artículo"
              {...register("filtro")}
            />
          </form>
        </div>
        <div className="containerPostsForo">
          {posts.map((post) => (
            <React.Fragment>
              <div className="postContainer">
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <img src={post.image} alt="" />
                <hr />
                <form
                  onSubmit={handleSubmit((data) => onSubmitComment(data, post))}
                >
                  <div className="formcomments">
                    <input type="text" {...register("comment")} />
                    <button type="submit">Enviar</button>
                  </div>
                </form>
                <div className="commentContainer">
                  {post.comments.map((comment) => (
                    <div className="comment">
                      <h4>
                        {comment.username}: {comment.text}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
