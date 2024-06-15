import "./GithubUser.css"
import Blog from "../UserProfile/Blog"
import Company from "../UserProfile/Company"
import Followers from "../UserProfile/Followers"
import Following from "../UserProfile/Following"
import Gitname from "../UserProfile/Gitname"
import Link from "../UserProfile/Link"
import Location from "../UserProfile/Location"
import Name from "../UserProfile/Name"
import Pic from "../UserProfile/Pic"
import Repos from "../UserProfile/Repos"

import Repositories from "../Repositories/Repositories"

function GithubUser({ profileData, loading, error, userRepositories}) {
  if (loading) {
    return <h2>Loading, please wait...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!profileData) {
    return null;
  }

  const repositoryCount = userRepositories.length
  const displayedRepos = userRepositories.slice(0,30)

  return (
    <div className="GithubUser">
      <div className="GithubUserLeft">
        <Pic Userpic={profileData.avatar_url} alt={profileData.login}/>
        <Name UserName={profileData.name} />
        <Gitname UserGitname={profileData.login} />
        <Blog userBlog={profileData.bio} />
        <Link UserLinkGit={profileData.html_url} />
        <Location UserLocation={profileData.location} />
        <Company UserCompany={profileData.company} />
        <Repos UserRepos={profileData.public_repos} />
        <Followers UserFollowers={profileData.followers} />
        <Following UserFollowing={profileData.following} />
      </div>
      <div className="GithubUserRight">
        <div className="GithubUserRightRepos">
        <h2>{`Repositories (${repositoryCount})`}</h2>
        {repositoryCount === 0 ? (
          <h2>No Repositories found</h2>
        ) : (
          displayedRepos.map((repo) => (
            <Repositories
            key={repo.id}
            totals={repositoryCount}
            linkToRepo={repo.html_url}
            repotitle={repo.name}
            repoDescription={repo.description}
            forks={repo.forks_count}
            stars={repo.stargazers_count}
            />
          ))
        ) }
        </div>
        <div className="GithubUserRightFollowers">
          followers
        </div>
        <div className="GithubUserRightFollowering">
          followering
        </div>
      </div>
    </div>
  );
}

export default GithubUser;
