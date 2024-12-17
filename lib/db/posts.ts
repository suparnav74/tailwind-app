import db from "./mysql";

interface InsertResult {
    affectedRows: number;
    insertId: number;
}
interface Post {
    post_id: number;
    name: string;
    post:string;
  }

const posts = {

    create_post : async (name:string,image:string,alt:string, content:string) =>{
        try {
                const insertAddressQuery = `
                INSERT INTO PostCreation (name, image, alt, time, content)
                VALUES (?, ?, ?, NOW(), ?)
                `;

                const result= await db.execute(insertAddressQuery, [
                name,
                image,
                alt,
                content
                ]);
                const address = result[0] as InsertResult;
                return address;
        } catch (error) {
            console.log(`[DB] Error while creating address ${error}`);
            return null;
        }
    },
    getPosts : async () => {
        try {
            const query = `
            SELECT post_id, name, post
            FROM PostCreation
          `;
          const result = await db.execute(query);
          const post = result[0] as Post[];
          console.log(post);
          return post;
        } catch (err) {
            console.log(`[DB] Error while getting brands ${err}`);
            return null;
        }    
    },

}

export default posts;