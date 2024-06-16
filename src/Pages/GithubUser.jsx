import "./GithubUser.css";
import Blog from "../UserProfile/Blog";
import Company from "../UserProfile/Company";
import Followers from "../UserProfile/Followers";
import Following from "../UserProfile/Following";
import Gitname from "../UserProfile/Gitname";
import Link from "../UserProfile/Link";
import Location from "../UserProfile/Location";
import Name from "../UserProfile/Name";
import Pic from "../UserProfile/Pic";
import Repos from "../UserProfile/Repos";
import Repositories from "../Repositories/Repositories";
import UserFollowers from "../Follow/UserFollowers";
import UserFollowing from "../Follow/UserFollowing";
import useGithubStore from "../store";

function GithubUser() {
  const { profileData, loading, error, userRepositories, userFollowers, userFollowing, fetchGitHubData } = useGithubStore();

  const repositoryCount = userRepositories.length
  const displayedRepos = userRepositories.slice(0, 30)

  const followersCount = userFollowers.length
  const displayFollowers = userFollowers.slice(0, 30)

  const followingCount = userFollowing.length
  const displayFollowing = userFollowing.slice(0, 30)

  return (
    <div className="GithubUser">
      <div className="GithubUserLeft">
        {loading && <h2>Loading profile, please wait...</h2>}
        {error && <h2>{error}</h2>}
        {!loading && !error && profileData && (
          <>
            <Pic Userpic={profileData.avatar_url} alt={profileData.login} />
            <Name UserName={profileData.name} />
            <Gitname UserGitname={profileData.login} />
            <Blog userBlog={profileData.bio} />
            <Link UserLinkGit={profileData.html_url} />
            <Location UserLocation={profileData.location} />
            <Company UserCompany={profileData.company} />
            <Repos UserRepos={profileData.public_repos} />
            <Followers UserFollowers={profileData.followers} />
            <Following UserFollowing={profileData.following} />
          </>
        )}
      </div>
      <div className="GithubUserRight">
        <div className="GithubUserRightRepos">
          {loading && <h2>Loading repositories, please wait...</h2>}
          {error && <h2>{error}</h2>}
          {!loading && !error && (
            <>
              <h2 className="headerRepo">{`Repositories (${repositoryCount})`}</h2>
              {repositoryCount === 0 ? (
                <h2>Oops...No Repositories yet</h2>
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
              )}
            </>
          )}
        </div>
        <div className="GithubUserRightFollowers">
          {loading && <h2>Loading followers, please wait...</h2>}
          {error && <h2>{error}</h2>}
          {!loading && !error && (
            <>
              <h2 className="HeaderFollowers">{`Followers (${followersCount})`}</h2>
              {followersCount === 0 ? (
                <h2>Oops...No followers yet</h2>
              ) : (
                displayFollowers.map((currentfollower) => (
                  <UserFollowers 
                    key={currentfollower.id}
                    image={currentfollower.avatar_url}
                    name={currentfollower.login}
                    handleGitHubSearch={() => fetchGitHubData(currentfollower.login)}
                  />
                ))
              )}
            </>
          )}
        </div>
        <div className="GithubUserRightFollowing">
          {loading && <h2>Loading following, please wait...</h2>}
          {error && <h2>{error}</h2>}
          {!loading && !error && (
            <>
              <h2 className="HeaderFollowing">{`Following (${followingCount})`}</h2>
              {followingCount === 0 ? (
                <h2>Oops...Not Following anyone yet</h2>
              ) : (
                displayFollowing.map((currentFollowing) => (
                  <UserFollowing
                    key={currentFollowing.id}
                    image={currentFollowing.avatar_url}
                    name={currentFollowing.login}
                    handleGitHubSearch={() => fetchGitHubData(currentFollowing.login)}
                  />
                ))
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default GithubUser;
