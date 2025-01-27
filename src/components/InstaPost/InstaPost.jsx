import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './InstaPost.css'; // Assuming you have a CSS file for styling

const InstaPost = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const accessToken = 'EAAIHFSNc2AsBO95UjdJFZCpqFdGBcxAFzVKjyxRkrFD5IvZBrzbKCpO5rNZBsCEnXOl4FERf6TglgrZCO0ayUpMdzuKNU0KZAvVGD9c97PThRDXHwIa6bii8XP4A7m8yshIN5QWgcgMeNRckXR7yZCCppco3qWwnHvBJhdDoT1JdV9c57UI2PVzKWY5LkozWWB'; // Replace with your valid access token
    const userId = '17841471508533979'; // Replace with your Instagram Business User ID
    const hashtag = 'weddingwebsite';




    //   {
    //     "name": "Abhishek Choudhary",
    //     "id": "122115490376617779"
    //   }

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Step 1: Fetch the Hashtag ID
                const hashtagResponse = await axios.get(
                      `https://graph.facebook.com/v21.0/ig_hashtag_search`,
                    
// https://graph.facebook.com/v21.0/122115490376617779?access_token=EAAIIa1tzpqQBO88A5VpXvjeYLtdk709KznnWO71uU7OGUVbJeZB1yp9ajlGzOp3ajyZBfZAkhZBUOJtLnH9U5FnAnkj46ijDE5ZAKxxGua1gsxeraRHgdDPRs18xZBJNPPM3boZCGPuqpGzuzRVoGqnwgvV8sjyzKFfAvAIiRAkrw97VbVQZAv0TQ78ZCoALTtyMoeGZAiOKab8UiJA1pxwgZDZD&debug=all&format=json&method=get&origin_graph_explorer=1&pretty=0&suppress_http_code=1&transport=cors`,


                    {
                        params: {
                            user_id: userId,
                            q: hashtag,
                            access_token: accessToken,
                        },
                    }
                );

                if (!hashtagResponse.data.data || hashtagResponse.data.data.length === 0) {
                    setError('No hashtag found for the given term.');
                    return;
                }

                const hashtagId = hashtagResponse.data.data[0].id;

                // Step 2: Fetch Recent Media Posts for the Hashtag
                const postsResponse = await axios.get(
                    `https://graph.facebook.com/v21.0/${hashtagId}/recent_media`,
                    {
                        params: {
                            fields: 'id,media_type,media_url,permalink,caption',
                            access_token: accessToken,
                        },
                    }
                );

                if (postsResponse.data.data.length === 0) {
                    setError('No recent posts found for the hashtag.');
                    return;
                }

                setPosts(postsResponse.data.data);
            } catch (err) {
                console.error('Error fetching Instagram posts:', err.response ? err.response.data : err.message);
                setError('Failed to fetch Instagram posts. Check console for details.');
            }
        };

        fetchPosts();
    }, [accessToken, hashtag, userId]);

    return (
        <div>
            <h2>Instagram Posts with #{hashtag}</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="instagram-feed">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post.id} className="instagram-post">
                            {post.media_type === 'IMAGE' && <img src={post.media_url} alt={post.caption || 'Instagram post'} />}
                            {post.media_type === 'VIDEO' && (
                                <video controls>
                                    <source src={post.media_url} type="video/mp4" />
                                </video>
                            )}
                            <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                                View on Instagram
                            </a>
                        </div>
                    ))
                ) : (
                    <p>No posts found for the hashtag #{hashtag}</p>
                )}
            </div>
        </div>
    );
};

export default InstaPost;
