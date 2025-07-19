import { 
    useParams,
    useNavigate,
    Link,
 } from "react-router-dom"
import {
    useEffect
} from 'react'

import {
    useRepos
} from '@/hooks/useRepos'

const RepoList = () => {
       const {id} = useParams();
       console.log(useParams());
       // 修改为使用 useNavigate
       const navigate = useNavigate();
       const {repos,loading,error} = useRepos(id);

       useEffect(() => {
        // 增加对 id 是否存在的判断
        if (!id || !id.trim()) {
          navigate('/');
          return;
        }
       },[id])

    if (loading) return (<>loading</>)
    if (error) return (<>Error: {error}</>)
    

    return (
        <> 
            <h2>Repositorties for {id}</h2>
            {
                repos.map((repos) => (
                    <div>
                        <Link key={repos.id} to={`/users/${id}/repos/${repos.name}`}>
                            {repos.name}
                        </Link>
                    </div>
                ))
            }
        </>
    )
}

export default RepoList