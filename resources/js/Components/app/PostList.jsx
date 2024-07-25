import PostItem from "./PostItem";

export default function PostList({ posts }) {

    const post1 = {
        user: {
            id: 1,
            avatar: 'https://xsgames.co/randomusers/assets/avatars/male/74.jpg',
            name: "Leon Wexler"
        },

        group: null,

        attachments: [
            {
                id: 1,
                name: 'test.png',
                url: 'https://randompicturegenerator.com/img/cat-generator/g1f53aa3c8a36ccb11124d36c23c73fdf8adedaa793cc4fb1a5ca6936c10940e30ffe042636433fa4d0c353496a050f12_640.jpg',
                mime: 'image/png' 
            },
            {
                id: 2,
                name: 'test2.png',
                url: 'https://randompicturegenerator.com/img/dog-generator/g3b4f2b51dc698d91ce817fd5f4483c2ebedc93a0e8f26980d205d7dd06648f196c8eb3233e76166fd31c610b1dab94de_640.jpg',
                mime: 'image/png' 
            },
            {
                id: 3,
                name: 'test.docx',
                url: '#',
                mime: 'application/msword' 
            }
        ],

        content: "<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse provident quidem accusantium ipsum placeat saepe blanditiis facere amet id quae quo eligendi nisi sit similique dignissimos repellendus sequi, quaerat exercitationem assumenda? Quo molestiae atque magni provident obcaecati, vel officia beatae autem, molestias consectetur aut expedita nesciunt quam iusto, dolorum asperiores. </p>",

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

        content: "<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse provident quidem accusantium ipsum placeat saepe blanditiis facere amet id quae quo eligendi nisi sit similique dignissimos repellendus sequi, quaerat exercitationem assumenda? Quo molestiae atque magni provident obcaecati, vel officia beatae autem, molestias consectetur aut expedita nesciunt quam iusto, dolorum asperiores. </p>",

        created_at: '2024-07-15 13:14'
    }

    return(
        <div>
            {posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    )
}