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

function GithubUser({ profileData, loading, error }) {
  if (loading) {
    return <h2>Loading, please wait...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!profileData) {
    return null;
  }

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
      <div className="GithubUserRight">GithubUserRight</div>
    </div>
  );
}

export default GithubUser;
