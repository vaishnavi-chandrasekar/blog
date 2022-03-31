import logo from "./logo.svg";
import "./App.css";
import TypeWriterEffect from "react-typewriter-effect";
import image from "./images/alan.gif";
import pics from "./images/hear.jpg";
import pic from "./images/intuition.jpg";
import photo from "./images/self-worth.jpg";
import mypic from "./images/adult.jpg";

function App() {
  return (
    <>
      <div className="App">
        <div className="typewriter">
          <h3 className="header">FEELING FRUSTATED?</h3>
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Roboto",
              color: "darkred",
              fontWeight: 1000,
              fontSize: "3.3em",
              textAlign: "center",
            }}
            startDelay={1500}
            cursorColor="transparent"
            multiText={["Then this might be for you..."]}
            multiTextDelay={500}
            typeSpeed={30}
          />
        </div>

        <div className="description">
          <div className="description__image">
            <h1 className="heading">Confused about life</h1>
            <br />
            <img src={image} className="alan"></img>
          </div>
          <div className="definition">
            <h3>
              People will ask n number of questions like what do you do for
              living?
              <br />
              Are you married? etc... When we are in groups, we are consciously
              <br /> and unconsciously engaging in social comparison, assessing
              our
              <br /> position and views against those of other group members.
              <br />
              Groups generate conformity. When we are in a group, <br />
              we are likely to confirm with how that group operates. <br />
              Behavior of a person in society will depend on his upbringing,
              <br />
              status, hereditary traits, etc. Hereditary impulses activate
              <br />
              different persons differently.{" "}
            </h3>
          </div>
        </div>
        <div>
          <h3 className="definition__two">
            Frustration usually occurs when you feel stuck or trapped, or unable
            to move forward in some way. It could be caused by a colleague
            blocking your favorite project, a boss who is too disorganized to
            get to your meeting on time, or simply being on hold on the phone
            for a long time.
            <h2 className="quote">
              “Everything we hear is an opinion, not a fact. <br />
              Everything we see is a perspective, not the truth.”— Marcus
              Aurelius
            </h2>
            <h2 className="steps">
              TO GET RID OF ALL THOSE STUFFS. START DOING THINGS...
            </h2>
            <h2>1. Don't listen them.</h2>
            <img src={pics} className="notheard_image"></img>
            <p>
              Don't listen to people and society. You know what has to be done
              what not to be. Don't let someone to lead your life.One reason why
              you absolutely shouldn't listen to the opinion of other people is
              because you should trust your intuition. You should trust who you
              are and why you're doing the things that you're doing. The most
              successful people in the world were ridiculed and shamed the most
              times for their dreams.
            </p>
            <br />
            <h2>2. Trust your intuition and who you are deep down inside</h2>
            <img src={pic} className="intuition_image"></img>
            <p>
              One reason why you absolutely shouldn’t listen to the opinion of
              other people is because you should trust your intuition. You
              should trust who you are and why you’re doing the things that
              you’re doing. The point is that you have to do what’s right for
              you, and not base that decision on what other people think about
              you or what you’re doing. Nobody is perfect. Nobody has the right
              to declare you unfit or unworthy of something just because of a
              flaw or because you’re different than others. As long as you’re
              doing the right things in this world with the right motivations,
              it doesn’t matter what other people’s opinions are of you.
            </p>
            <h2>3. Your self-worth isn’t defined by an approval rating</h2>
            <img src={photo} className="self-worth_image"></img>
            <p>
              No matter what the naysayers and the purveyors of negativity
              around you might say, your self-worth isn’t defined by an approval
              rating. There’s no objective rating scale that allows another
              person to judge you. They don’t know what you’ve been through.
              They don’t know your story, your trials, your tribulations, or the
              path you’ve walked through the shadow of the valley of death. No,
              it simply doesn’t work that way. However, too often, we do define
              our self-worth by an approval rating. We do allow what others say
              or think about us to influence how we feel about ourselves. The
              happiness barometer is often influenced by the he-said-she-said
              pipeline. That grapevine makes it to us in some way or another,
              whether electronically or verbally, and we feel the effects of
              that, similar to a ground-altering earthquake.
            </p>
          </h3>
        </div>
      </div>
    </>
  );
}

export default App;
