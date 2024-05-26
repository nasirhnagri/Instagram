const instgramApp = {
  state: {
    posts: [

      {
        id: 2,
        username: "nadeem Ali",
        location: "Gojal",
        imageUrl: "./images/Nora-Fatehi-2.jpeg",
        profileImage: "./images/Nora-Fatehi-2.jpeg",
        likes: 5,
        isLike: false,
        view: 23,
        caption:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eius doloribus vitae ex eum eligendi nostrum veritatis necessitatibus nulla quibusdam. Voluptatum ratione molestias ipsum sint sunt incidunt quaerat facere quis.",
        comments: {
          userId: 2,
          text: "I like you",
          username: "haider",
          likes: 0,
          createdAt: new Date(),
          updatedAd: new Date(),
        },
        createdAt: new Date("4 mints"),
        updatedAt: new Date(),
      },
      {
        id: 1,
        username: "nora-Khan",
        location: "Nagar",
        profileImage: "./images/Nora-Fatehi-3.jpeg",
        imageUrl: "./images/Nora-Fatehi-3.jpeg",
        likes: 10,
        isLike: false,
        view: 3,
        caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eius doloribus vitae ex eum eligendi nostrum veritatis necessitatibus nulla quibusdam. Voluptatum ratione molestias ipsum sint sunt incidunt quaerat facere quis.",
        comments: {
          userId: 2,
          text: "I like you",
          username: "shahzad",
          likes: 0,
          createdAt: new Date(),
          updatedAd: new Date(),
        },
        createdAt: new Date("4 mints"),
        updatedAt: new Date(),
      },
      {
        id: 3,
        username: "shafi Khan",
        location: "Hunza",
        imageUrl: "./images/Nora-Fatehi-1.jpeg",
        profileImage: "./images/Nora-Fatehi-1.jpeg",
        likes: 3,
        isLike: false,
        view: 13,
        caption:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eius doloribus vitae ex eum eligendi nostrum veritatis necessitatibus nulla quibusdam. Voluptatum ratione molestias ipsum sint sunt incidunt quaerat facere quis.",
        comments: {
          userId: 2,
          text: "I like you",
          username: "shahzad",
          likes: 0,
          createdAt: new Date(),
          updatedAd: new Date(),
        },
        createdAt: new Date("4 mints"),
        updatedAt: new Date(),
      },
    ],
  },

  handleAddLike: (postId) => {
    const {state: { posts },render,} = instgramApp;
    const postIndex = posts.findIndex((x) => x.id === postId);

    if (postIndex > -1) {
      posts[postIndex].likes = posts[postIndex].isLike
        ? posts[postIndex].likes - 1
        : posts[postIndex].likes + 1;
      posts[postIndex].isLike = !posts[postIndex].isLike;
      // console.log({ posts });
      render();
    }
  },

  renderPost: (post) => {
    return `
      <div class="post">
          <div class="user-details">
            <div class="boder-style">
              <img class="profile-image" src="${post.profileImage}"/>
            </div>
                <div class="details">
                  <h2>${post.username}</h2>
                  <p>${post.location}</p>
                </div>
                  <i class="fas fa-ellipsis-h"></i>
          </div>
            <img src="${post.imageUrl}"/>
          <div class="icons-flex">
              <div class="icons">
                  <i onclick="instgramApp.handleAddLike(${post.id})" class="far fa-heart"></i>
                  <i class="far fa-comment"></i>
                  <i class="far fa-paper-plane"></i>
              </div>
              <div class="icon-saved">
                  <i class="far fa-bookmark"></i>
              </div>
          </div>
          <div class="">
              <p class="post-like ${post.isLike ?  "liked" : ""}
                "onclick="instgramApp.handleAddLike(${post.id})">
                ${post.likes}${post.isLike ?  "UnLike" :  "Likes"}<p>
          </div>
                <p class="caption"><strong>${post.username}</strong> ${post.caption}</p> 
                <p class="view-btn">View all ${post.view}</p> 
                <p class="caption-date">${post.createdAt} Ago</p> 
      </div>
    `;
  },

  render: () => {
    const {state: { posts },renderPost,} = instgramApp;
    const root = document.querySelector("#root");
    root.innerHTML = posts.map((post) => renderPost(post)).join("");
  },
};

instgramApp.render();
