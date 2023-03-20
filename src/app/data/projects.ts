import { Project } from '../model/project';

export const PROJECTS: Project[] = [
    {
      "id": 1,
      "title": "Portfolio Showcase",
      "slug": "portfolio-showcase",
      "excerpt": "A vitae eius numquam amet. Fuga quo illum ipsam odio et.",
      "body": "<p>Ea error fugit cumque non exercitationem non. Molestias et deserunt ad suscipit quis. Rerum voluptatem saepe aperiam assumenda.</p></p>Saepe tenetur nihil quia quidem nemo. Sequi similique iure ullam facilis. Molestias occaecati veritatis provident.</p></p>Adipisci expedita distinctio libero ea. Nulla quam minus beatae voluptate laudantium quis eos. Fugit ullam ut perferendis quia dignissimos. Blanditiis iste et voluptas magni. Voluptate eos qui quaerat iure eius est aut.</p></p>Quisquam est voluptatum aut cupiditate molestias. Explicabo consequuntur nostrum et et non neque. Consequatur sed est sed blanditiis voluptatem nihil.</p>",
      "url": null,
      "published_date": null,
      "image": "assets/images/portfolio-showcase-image.png",
      "thumb": "assets/images/portfolio-showcase-thumb2.png",
      "category_id": 3,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 3, "slug": "full-stack", "name": "Full Stack" },
      "tags": [
        {
          "id": 1,
          "name": "Laravel",
          "slug": "laravel",
          "pivot": { "projects_id": 1, "tags_id": 1 }
        },
        {
          "id": 2,
          "name": "PHP",
          "slug": "php",
          "pivot": { "projects_id": 1, "tags_id": 2 }
        },
        {
          "id": 3,
          "name": "Docker",
          "slug": "docker",
          "pivot": { "projects_id": 1, "tags_id": 3 }
        }
      ]
    },
    {
      "id": 2,
      "title": "SSD Yearbook",
      "slug": "ssd-yearbook",
      "excerpt": "Nostrum voluptatem est esse culpa amet nemo. Earum ea rerum id repudiandae esse quasi et.",
      "body": "<p>Velit perspiciatis tenetur aspernatur cum qui facilis. Quos tempora omnis harum corporis. Cumque quisquam ea cumque aut sed eius. Ut mollitia architecto eaque tempora ab sit alias.</p></p>Recusandae id non sunt voluptatem. Aut et ab et nihil. At unde recusandae ea molestias dignissimos quisquam molestias.</p></p>Dolore qui recusandae non. Non omnis vel similique ullam odit maiores. Libero in consequatur quia dolores. Unde aliquam hic mollitia.</p>",
      "url": null,
      "published_date": null,
      "image": null,
      "thumb": null,
      "category_id": 1,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 1, "slug": "back-end", "name": "Back End" },
      "tags": [  {
        "id": 4,
        "name": "ReactJs",
        "slug": "reactjs",
        "pivot": { "projects_id": 2, "tags_id": 4}
      }]
    },
    {
      "id": 3,
      "title": "Movie App",
      "slug": "movie-app",
      "excerpt": "Et autem hic voluptatibus qui ipsa est. Consequatur tempore nihil et laboriosam aut impedit.",
      "body": "<p>Numquam voluptates quod doloremque sed. Odio ea in totam veritatis consequuntur ad cupiditate. Adipisci et qui dolor architecto dicta asperiores a. Consequuntur est impedit explicabo ut iste aperiam error deleniti.</p></p>Consequatur sint quia error exercitationem iusto doloremque non placeat. Ut ea molestiae aut. Ab et dolorum ab sit omnis sit. Consequatur ipsam culpa repellat voluptas.</p></p>Facere rem eum doloribus deleniti repellat. Ut quia amet incidunt. Eos et culpa reiciendis ipsum et molestiae omnis. Cumque reprehenderit delectus eum alias consequatur quibusdam.</p></p>Quod minus aut est quis omnis magnam. Tempora ad ab quia sed est optio distinctio. Ut vel et dolor sint est iure.</p></p>Suscipit dolores omnis quia nihil. Deleniti totam rerum cupiditate. Odio maiores consequatur fuga perspiciatis. Commodi doloremque exercitationem neque eius. Nulla cumque et doloribus ab consectetur voluptatem explicabo.</p>",
      "url": null,
      "published_date": null,
      "image": "assets/images/movie-app-image.png",
      "thumb": "assets/images/movie-app-thumb1.jpeg",
      "category_id": null,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": null,
      "tags": [{
        "id": 5,
        "name": "NodeJs",
        "slug": "nodejs",
        "pivot": { "projects_id": 3, "tags_id": 5}
      }]
    },
    {
      "id": 4,
      "title": "The LocalHost",
      "slug": "the-localhost",
      "excerpt": "Placeat doloremque sed doloribus debitis quia omnis quaerat alias. Odio et qui enim eveniet ratione ducimus.",
      "body": "<p>Ut facere cumque hic corrupti animi. Dolore sequi fugit sed quisquam ratione repellat eaque. Eos autem perspiciatis ipsum voluptas voluptas.</p></p>Cum illum iste quia et minima ipsam non. Quas nobis et laborum nihil animi. Quia corrupti et saepe est consectetur ducimus dolores.</p></p>Voluptas rerum sed voluptates ea aliquid. Laboriosam in quisquam tempore sed saepe totam.</p>",
      "url": null,
      "published_date": null,
      "image": "assets/images/the-localhost-image.png",
      "thumb": "assets/images/the-localhost-thumb.png",
      "category_id": 2,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 2, "slug": "front-end", "name": "Front End" },
      "tags": []
    },
    {
      "id": 5,
      "title": "Dice Game",
      "slug": "dice-game",
      "excerpt": "Nostrum dolores dignissimos qui omnis rerum blanditiis. Tenetur et aut eum est.",
      "body": "<p>Sit quae laborum sunt dolorum voluptatem et ipsam. Et ipsum animi exercitationem est omnis.</p></p>Autem autem est non voluptatibus. A neque veniam voluptas quo vitae adipisci odio. Vitae quo ea atque molestiae dolorem in.</p></p>Similique adipisci eum qui voluptate repudiandae tempore corporis. At iste earum totam minima dignissimos odio sed animi. Rerum exercitationem est est expedita quae. Mollitia minima ut necessitatibus est dolores rem. Ducimus sit consequatur eos quia omnis.</p>",
      "url": null,
      "published_date": null,
      "image": "assets/images/dice-game-image.png",
      "thumb": "assets/images/dice-game-thumb.png",
      "category_id": 2,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 2, "slug": "front-end", "name": "Front End" },
      "tags": [{
        "id": 8,
        "name": "JavaScript",
        "slug": "javascript",
        "pivot": { "projects_id": 5, "tags_id": 8}
      },
        {
          "id": 6,
          "name": "HTML",
          "slug": "html",
          "pivot": { "projects_id": 5, "tags_id": 6}
        },{
          "id": 7,
          "name": "CSS",
          "slug": "css",
          "pivot": { "projects_id": 5, "tags_id": 7}
        
      }]
    },

   
    {
      "id": 8,
      "title": "Internal Project",
      "slug": "internal-project",
      "excerpt": "Iure ratione nemo cumque. Aliquid esse soluta provident consequatur velit ut architecto.",
      "body": "<p>Deleniti rerum labore sint quibusdam. Expedita ea reiciendis molestiae et amet repellendus autem voluptates. Aut qui voluptas ullam suscipit necessitatibus libero veritatis.</p></p>Pariatur voluptatum quia at quod. Quod quisquam qui commodi. Autem quae sequi minus iste.</p></p>Id atque magnam dolorem minus omnis aut accusantium. Et maxime blanditiis asperiores itaque sit qui culpa est. Consequatur esse excepturi suscipit ea et est corporis. Iure earum dolorum pariatur id.</p></p>Quia dicta quis libero eos odio expedita. In blanditiis doloribus natus ullam expedita est. Sed voluptatibus rerum distinctio voluptate assumenda vel cum.</p></p>Provident ut ipsam minus eos. Quaerat est tempore architecto sint. Vitae deserunt ullam corrupti asperiores sit quia facilis.</p></p>Quia minus ut qui cum odio error dolor quia. Rerum minus molestias voluptatum et eius consequatur. Autem quis et molestiae quidem provident voluptas fuga vel. Voluptatibus quas accusantium doloremque dolores deleniti eum.</p>",
      "url": null,
      "published_date": null,
      "image": null,
      "thumb": null,
      "category_id": 3,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 3, "slug": "full-stack", "name": "Full Stack" },
      "tags": []
    },
    {
      "id": 8,
      "title": "Industry Project",
      "slug": "industry-project",
      "excerpt": "Iure ratione nemo cumque. Aliquid esse soluta provident consequatur velit ut architecto.",
      "body": "<p>Deleniti rerum labore sint quibusdam. Expedita ea reiciendis molestiae et amet repellendus autem voluptates. Aut qui voluptas ullam suscipit necessitatibus libero veritatis.</p></p>Pariatur voluptatum quia at quod. Quod quisquam qui commodi. Autem quae sequi minus iste.</p></p>Id atque magnam dolorem minus omnis aut accusantium. Et maxime blanditiis asperiores itaque sit qui culpa est. Consequatur esse excepturi suscipit ea et est corporis. Iure earum dolorum pariatur id.</p></p>Quia dicta quis libero eos odio expedita. In blanditiis doloribus natus ullam expedita est. Sed voluptatibus rerum distinctio voluptate assumenda vel cum.</p></p>Provident ut ipsam minus eos. Quaerat est tempore architecto sint. Vitae deserunt ullam corrupti asperiores sit quia facilis.</p></p>Quia minus ut qui cum odio error dolor quia. Rerum minus molestias voluptatum et eius consequatur. Autem quis et molestiae quidem provident voluptas fuga vel. Voluptatibus quas accusantium doloremque dolores deleniti eum.</p>",
      "url": null,
      "published_date": null,
      "image": null,
      "thumb": null,
      "category_id": 3,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 3, "slug": "full-stack", "name": "Full Stack" },
      "tags": []
    }
  ]
  