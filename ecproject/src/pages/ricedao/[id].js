//SSG
import { client } from "../../lib/client";


export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint:"ricedao", contentId: id });

    return {
        props: {
            ricedao:data,
        },
    };
};

export async function getStaticPaths() {
    const data = await client.get({ endpoint: "ricedao" });
    const paths = data.contents.map(content => ({ params: { id: content.id } }));
    
    return {
        paths,
        fallback: false // または 'blocking' または true
    };
}


export default function RicedaoId({ ricedao }){
    return (
        <main>
            <h1>{ricedao.title}</h1>
            <p>{ricedao.publishedAt}</p>
            <div dangerouslySetInnerHTML={{__html: `${ricedao.body}`}}></div>

        </main>
    );
};
