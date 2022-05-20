export default function Root(props) {
  return (
    <section>
      {props.name} is mounted!
      <br />
      <a href="/angular">Check Angular</a> |&nbsp; 
      <a href="/vue">Check Vue</a>
    </section>
  );
}
