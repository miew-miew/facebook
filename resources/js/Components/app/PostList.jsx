import PostItem from "./PostItem";

export default function PostList() {

    const post1 = {
        user: {
            id: 1,
            avatar: 'https://xsgames.co/randomusers/assets/avatars/male/74.jpg',
            name: "Leon Wexler"
        },

        group: null,

        body: "<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse provident quidem accusantium ipsum placeat saepe blanditiis facere amet id quae quo eligendi nisi sit similique dignissimos repellendus sequi, quaerat exercitationem assumenda? Quo molestiae atque magni provident obcaecati, vel officia beatae autem, molestias consectetur aut expedita nesciunt quam iusto, dolorum asperiores. </p>",

        created_at: '2024-07-15 10:54'
    }

    const post2 = {
        user: {
            id: 1,
            avatar: 'https://xsgames.co/randomusers/assets/avatars/male/72.jpg',
            name: "Arnold Eikner"
        },

        group: {
            id: 1,
            name: 'Laravel Developers'
        },

        body: "<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse provident quidem accusantium ipsum placeat saepe blanditiis facere amet id quae quo eligendi nisi sit similique dignissimos repellendus sequi, quaerat exercitationem assumenda? Quo molestiae atque magni provident obcaecati, vel officia beatae autem, molestias consectetur aut expedita nesciunt quam iusto, dolorum asperiores. </p>",

        created_at: '2024-07-15 13:14'
    }

    return(
        <div>
            <PostItem post={post1}/>
            <PostItem post={post2}/>
        </div>
    )
}