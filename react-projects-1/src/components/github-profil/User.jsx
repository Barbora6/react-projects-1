export const User = ({ user }) => {
  const { avatar_url, followers, following, public_repos, name, login } = user;

  return (
    <div className="user">
      <div className="image-container">
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div className="name-container">
        <a href={`https://github.com/${login}`}>{name || login}</a>
      </div>
      <div className="profile-info">
        <div>
          <p>Veřejný repositář:</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Folowers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Folowing</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
};
