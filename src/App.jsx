import React from "react";
import Form from "@cloudscape-design/components/form";
import Button from "@cloudscape-design/components/button";
import Container from "@cloudscape-design/components/container";
import { SpaceBetween } from "@cloudscape-design/components";
import Header from "@cloudscape-design/components/header";
import FormField from "@cloudscape-design/components/form-field";
import Grid from "@cloudscape-design/components/grid";
import Input from "@cloudscape-design/components/input";
import Pagination from "@cloudscape-design/components/pagination";
import NumberedListInput from "./components/NumberedListInput.jsx";
import CheckboxList from "./components/CheckboxList.jsx";
import TextareaInput from "./components/TextareaInput.jsx";
import MultiNumericInput from "./components/MultiNumericInput.jsx";
import TextareaOutput from "./components/print/TextareaOutput.jsx";
import NumberedListOutput from "./components/print/NumberedListOutput.jsx";
import CheckboxListOutput from "./components/print/CheckboxListOutput.jsx";
import MultiNumericOutput from "./components/print/MultiNumericOutput.jsx";
import "./App.css";
import MeetingInput from "./components/MeetingInput.jsx";
import MeetingOutput from "./components/print/MeetingOutput.jsx";

const totalPages = 9;
const formDescription =
  "Preventing relapse requires a commitment to recovery. It also requires a plan of action. Relapse is not an event, but a process. Before the physical act of relapse, there are changes in feelings, thoughts, and behaviiors. Cravings also play a role in relapse. By developing and following a written plan, you can halt the relapse process.";

function App() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [formData, setFormData] = React.useState({
    doc: "",
    q1: null,
    q2: [
      { label: "Anger", checked: false, isBlank: false },
      { label: "Grief", checked: false, isBlank: false },
      { label: "Jealousy", checked: false, isBlank: false },
      { label: "Fear", checked: false, isBlank: false },
      { label: "Embarrassment", checked: false, isBlank: false },
      { label: "Hopelessness", checked: false, isBlank: false },
      { label: "Joy", checked: false, isBlank: false },
      { label: "", checked: false, isBlank: true },
      { label: "", checked: false, isBlank: true },
    ],
    q3: null,
    q4: null,
    q5: null,
    q6: null,
    q7: null,
    q8: null,
    q9: null,
    q10: null,
    q11: null,
    meetings: null,
    q12: null,
    q13: null,
    q14: null,
    q15: null,
    relapseTriggers: [
      { label: "Bars", checked: false, isBlank: false },
      { label: "Old using buddies", checked: false, isBlank: false },
      { label: "Parties", checked: false, isBlank: false },
      {
        label: "Watching people use/drink on TV",
        checked: false,
        isBlank: false,
      },
      { label: "Stressful events", checked: false, isBlank: false },
      { label: "Arguments", checked: false, isBlank: false },
      { label: "Feeling unloved or unwanted", checked: false, isBlank: false },
      { label: "Grief and loss", checked: false, isBlank: false },
      { label: "Celebrations", checked: false, isBlank: false },
      { label: "Sex", checked: false, isBlank: false },
      { label: "Problems sleeping", checked: false, isBlank: false },
      { label: "Holidays", checked: false, isBlank: false },
      { label: "Cash", checked: false, isBlank: false },
      { label: "Loneliness", checked: false, isBlank: false },
      { label: "Boredom", checked: false, isBlank: false },
      {
        label: "Finding forgotten paraphernalia",
        checked: false,
        isBlank: false,
      },
      { label: "The smell of beer", checked: false, isBlank: false },
      { label: "Casinos", checked: false, isBlank: false },
      { label: "Pharmacies", checked: false, isBlank: false },
      { label: "Anxiety", checked: false, isBlank: false },
      { label: "Concerts", checked: false, isBlank: false },
      { label: "A setback at work", checked: false, isBlank: false },
      { label: "", checked: false, isBlank: true },
      { label: "", checked: false, isBlank: true },
      { label: "", checked: false, isBlank: true },
      { label: "", checked: false, isBlank: true },
      { label: "", checked: false, isBlank: true },
      { label: "", checked: false, isBlank: true },
      { label: "", checked: false, isBlank: true },
      { label: "", checked: false, isBlank: true },
    ],
    q16: null,
    q17: null,
    q18: null,
    q19: null,
    q20: null,
    q21: null,
    q22: null,
    q23: null,
    q24: null,
    q25: null,
    q26: null,
  });
  const [showFormResults, setShowFormResults] = React.useState(false);

  function formSubmit(e) {
    e.preventDefault();
    setShowFormResults(true);
  }

  function showForm() {
    setShowFormResults(false);
  }

  if (showFormResults) {
    return (
      <div className="results-view">
        <h1>
          Relapse Prevention Plan{" "}
          <small>updated: {new Date().toLocaleString()}</small>
        </h1>
        <TextareaOutput value={formData.doc}>
          What is your drug of choice?
        </TextareaOutput>
        <NumberedListOutput values={formData.q1}>
          Write down at least three (3) reasons you are ready to stop
          drinking/using.
        </NumberedListOutput>
        <CheckboxListOutput values={formData.q2}>
          What are some <span className="underline italic">feelings</span> that
          may trigger a relapse?
        </CheckboxListOutput>
        <TextareaOutput value={formData.q3}>
          For each feeling you checked on the left, write down a healthy way to
          cope with the feeling.
        </TextareaOutput>
        <NumberedListOutput values={formData.q4}>
          What are some <span className="underline italic">thoughts</span> that
          may lead to relapse? (Examples: Thinking about the good times or
          thinking you are cured.) Be as specific as possible.
        </NumberedListOutput>
        <NumberedListOutput values={formData.q5}>
          What are some <span className="underline italic">behaviors</span> that
          may lead to relapse? (Examples: Not attending meetings, not calling
          your sponsor, eating too much junk food, being in an unhealthy
          relationship.) Be as specific as possible.
        </NumberedListOutput>
        <NumberedListOutput values={formData.q6}>
          Who are the <span className="underline italic">people</span> you are
          most likely to use with?
        </NumberedListOutput>
        <NumberedListOutput values={formData.q7}>
          Write down the names of five(5) people you can call when tempted to
          use:
        </NumberedListOutput>
        <NumberedListOutput values={formData.q8}>
          Where are the <span className="underline italic">places</span> you are
          mostly likely to use?
        </NumberedListOutput>
        <NumberedListOutput values={formData.q9}>
          What other <span className="underline italic">situations</span> or{" "}
          <span className="underline italic">events</span> are triggers for you?
        </NumberedListOutput>
        <NumberedListOutput values={formData.q10}>
          Write down ten (10) ways you can cope with cravings.
        </NumberedListOutput>
        <MultiNumericOutput
          questions={["How many 12-step meetings will you attend each week?"]}
          values={formData.q11}
        />
        <MeetingOutput values={formData.meetings}>Meetings</MeetingOutput>
        <TextareaOutput value={formData.q12}>
          How will you get to meetings?
        </TextareaOutput>
        <MultiNumericOutput
          questions={[
            "How often will you call your sponsor?",
            "How often will you meet with your sponsor?",
          ]}
          values={formData.q13}
        ></MultiNumericOutput>
        <NumberedListOutput values={formData.q14}>
          List five (5) consequences of a relapse. (Examples: Failing a drug
          screen, calling in to work, missing an appointment, etc.)
        </NumberedListOutput>
        <NumberedListOutput values={formData.q15}>
          List five (5) benefits of working a recovery program.
        </NumberedListOutput>
        <NumberedListOutput values={formData.q16}>
          Write down five (5) short-term goals (1-12 months) that you can only
          achieve through sobriety
        </NumberedListOutput>
        <NumberedListOutput values={formData.q17}>
          Write down five (5) long-term goals (1-3 years) that you can only
          achieve through sobriety
        </NumberedListOutput>
        <CheckboxListOutput values={formData.relapseTriggers}>
          Relapse triggers
        </CheckboxListOutput>
        <TextareaOutput value={formData.q18}>
          What are some strategies for <span className="italic">avoiding</span>{" "}
          triggers?
        </TextareaOutput>
        <TextareaOutput value={formData.q19}>
          For the triggers you can&apos;t avoid or predict, what are some
          strategies for successful coping?
        </TextareaOutput>
        <NumberedListOutput values={formData.q20}>
          Who can you rely on when you&apos;re feeling triggered or experiencing
          cravings?
        </NumberedListOutput>
        <MultiNumericOutput
          questions={["How many glasses of water will you drink per day?"]}
          values={formData.q21}
        />
        <MultiNumericOutput
          questions={["How many hours of sleep do you need per night?"]}
          values={formData.q22}
        />
        <TextareaOutput value={formData.q23}>
          Think of a time you were tempted to use, but didn&apos;t give in. What
          happened?
        </TextareaOutput>
        <TextareaOutput value={formData.q24}>
          How did you feel before, during, and after?
        </TextareaOutput>
        <TextareaOutput value={formData.q25}>
          What helped you to resist?
        </TextareaOutput>
        <TextareaOutput value={formData.q26}>
          Build on this experience - write about how you can use this strategy
          again to protect your recovery. List ways you can strengthen and
          sustain your resolve.
        </TextareaOutput>
        <div className="no-print">
          <Button onClick={showForm}>Form View</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={formSubmit} className="rpp-form">
        <Form
          actions={
            <div className="footer-container">
              <SpaceBetween size="s" direction="horizontal">
                <Pagination
                  currentPageIndex={currentPage}
                  pagesCount={totalPages}
                  onChange={({ detail }) =>
                    setCurrentPage(detail.currentPageIndex)
                  }
                />
                <Button variant="primary">Results View</Button>
              </SpaceBetween>
              <hr />
            </div>
          }
          header={
            <div className="form-title-header">
              <Header variant="h1" description={formDescription}>
                Relapse Prevention Plan
              </Header>
              <div className="header-pagination">
                <Pagination
                  currentPageIndex={currentPage}
                  pagesCount={totalPages}
                  onChange={({ detail }) =>
                    setCurrentPage(detail.currentPageIndex)
                  }
                />
              </div>
            </div>
          }
        >
          <div className="page-container">
            {currentPage === 1 ? (
              <Container>
                <Grid
                  gridDefinition={[
                    { colspan: 6 },
                    { colspan: 12 },
                    { colspan: 7 },
                    { colspan: 5 },
                    { colspan: 12 },
                  ]}
                >
                  <FormField label="What is your drug of choice?">
                    <Input
                      value={formData.doc}
                      onChange={(e) =>
                        setFormData({ ...formData, doc: e.detail.value })
                      }
                    />
                  </FormField>
                  <NumberedListInput
                    inputCount={3}
                    defaultValues={formData.q1}
                    onChange={(values) =>
                      setFormData({ ...formData, q1: values })
                    }
                  >
                    Write down at least three (3) reasons you are ready to stop
                    drinking/using.
                  </NumberedListInput>
                  <CheckboxList
                    defaultValues={formData.q2}
                    onChange={(v) => setFormData({ ...formData, q2: v })}
                  >
                    What are some{" "}
                    <span className="underline italic">feelings</span> that may
                    trigger a relapse?
                  </CheckboxList>
                  <TextareaInput
                    defaultValue={formData.q3}
                    onChange={(value) =>
                      setFormData({ ...formData, q3: value })
                    }
                  >
                    For each feeling you checked on the left, write down a
                    healthy way to cope with the feeling.
                  </TextareaInput>
                  <NumberedListInput
                    defaultValues={formData.q4}
                    inputCount={5}
                    onChange={(values) =>
                      setFormData({ ...formData, q4: values })
                    }
                  >
                    What are some{" "}
                    <span className="underline italic">thoughts</span> that may
                    lead to relapse? (Examples: Thinking about the good times or
                    thinking you are cured.) Be as specific as possible.
                  </NumberedListInput>
                </Grid>
              </Container>
            ) : null}
            {currentPage === 2 ? (
              <Container
                header={<Header variant="h2">Warning signs & triggers</Header>}
              >
                <Grid
                  gridDefinition={[
                    { colspan: 12 },
                    { colspan: 6 },
                    { colspan: 6 },
                    { colspan: 12 },
                    { colspan: 12 },
                  ]}
                >
                  <NumberedListInput
                    defaultValues={formData.q5}
                    inputCount={5}
                    onChange={(values) =>
                      setFormData({ ...formData, q5: values })
                    }
                  >
                    What are some{" "}
                    <span className="underline italic">behaviors</span> that may
                    lead to relapse? (Examples: Not attending meetings, not
                    calling your sponsor, eating too much junk food, being in an
                    unhealthy relationship.) Be as specific as possible.
                  </NumberedListInput>
                  <NumberedListInput
                    defaultValues={formData.q6}
                    inputCount={5}
                    onChange={(values) =>
                      setFormData({ ...formData, q6: values })
                    }
                  >
                    Who are the <span className="underline italic">people</span>{" "}
                    you are most likely to use with?
                  </NumberedListInput>
                  <NumberedListInput
                    defaultValues={formData.q7}
                    inputCount={5}
                    onChange={(values) =>
                      setFormData({ ...formData, q7: values })
                    }
                  >
                    Write down the names of five(5) people you can call when
                    tempted to use:
                  </NumberedListInput>
                  <NumberedListInput
                    defaultValues={formData.q8}
                    inputCount={5}
                    onChange={(values) =>
                      setFormData({ ...formData, q8: values })
                    }
                  >
                    Where are the{" "}
                    <span className="underline italic">places</span> you are
                    mostly likely to use?
                  </NumberedListInput>
                  <NumberedListInput
                    defaultValues={formData.q9}
                    inputCount={5}
                    onChange={(values) =>
                      setFormData({ ...formData, q9: values })
                    }
                  >
                    What other{" "}
                    <span className="underline italic">situations</span> or{" "}
                    <span className="underline italic">events</span> are
                    triggers for you?
                  </NumberedListInput>
                </Grid>
              </Container>
            ) : null}
            {currentPage === 3 ? (
              <Container
                header={
                  <Header variant="h2">Cravings & 12-step meetings</Header>
                }
              >
                <Grid
                  gridDefinition={[
                    { colspan: 12 },
                    { colspan: 12 },
                    { colspan: 12 },
                    { colspan: 12 },
                  ]}
                >
                  <p className="outlined-paragraph">
                    Cravings: Remember that cravings will pass. However, there
                    are different techniques to help with intense cravings. You
                    can talk about it with your sponsor or with a friend in
                    recovery. Or you can distract yourself by journaling,
                    watching a comedy, listening to loud music, running, doing a
                    crossword puzzle, cleaning house, working on a project, etc.
                  </p>
                  <NumberedListInput
                    defaultValues={formData.q10}
                    inputCount={10}
                    onChange={(values) =>
                      setFormData({ ...formData, q10: values })
                    }
                  >
                    Write down ten (10) ways you can cope with cravings.
                  </NumberedListInput>
                  <MultiNumericInput
                    defaultValues={formData.q11}
                    questions={[
                      "How many 12-step meetings will you attend each week?",
                    ]}
                    onChange={(values) =>
                      setFormData({ ...formData, q11: values })
                    }
                  />
                  <MeetingInput
                    defaultValues={formData.meetings}
                    onChange={(values) =>
                      setFormData({ ...formData, meetings: values })
                    }
                  >
                    <p className="outlined-paragraph">
                      Use the blank weekly schedule below to fill in meeting
                      names, when they meet, and they places the meet.
                    </p>
                  </MeetingInput>
                </Grid>
              </Container>
            ) : null}
            {currentPage === 4 ? (
              <Container
                header={
                  <Header variant="h2">
                    12-step meetings, sponsorship, & consequences of
                    relapse/benefits of recovery
                  </Header>
                }
              >
                <Grid
                  gridDefinition={[
                    { colspan: 12 },
                    { colspan: 12 },
                    { colspan: 12 },
                    { colspan: 12 },
                  ]}
                >
                  <TextareaInput
                    defaultValue={formData.q12}
                    onChange={(values) =>
                      setFormData({ ...formData, q12: values })
                    }
                  >
                    How will you get to meetings?
                  </TextareaInput>
                  <MultiNumericInput
                    defaultValues={formData.q13}
                    questions={[
                      "How often will you call your sponsor?",
                      "How often will you meet with your sponsor?",
                    ]}
                    onChange={(values) =>
                      setFormData({ ...formData, q13: values })
                    }
                  />
                  <NumberedListInput
                    inputCount={5}
                    defaultValues={formData.q14}
                    onChange={(values) =>
                      setFormData({ ...formData, q14: values })
                    }
                  >
                    List five (5) consequences of a relapse. (Examples: Failing
                    a drug screen, calling in to work, missing an appointment,
                    etc.)
                  </NumberedListInput>
                  <NumberedListInput
                    inputCount={5}
                    defaultValues={formData.q15}
                    onChange={(values) =>
                      setFormData({ ...formData, q15: values })
                    }
                  >
                    List five (5) benefits of working a recovery program.
                  </NumberedListInput>
                </Grid>
              </Container>
            ) : null}
            {currentPage === 5 ? (
              <Container header={<Header variant="h2">Goals</Header>}>
                <Grid gridDefinition={[{ colspan: 12 }, { colspan: 12 }]}>
                  <NumberedListInput
                    inputCount={5}
                    defaultValues={formData.q16}
                    onChange={(values) =>
                      setFormData({ ...formData, q16: values })
                    }
                  >
                    Write down five (5) short-term goals (1-12 months) that you
                    can only achieve through sobriety
                  </NumberedListInput>
                  <NumberedListInput
                    inputCount={5}
                    defaultValues={formData.q17}
                    onChange={(values) =>
                      setFormData({ ...formData, q17: values })
                    }
                  >
                    Write down five (5) long-term goals (1-3 years) that you can
                    only achieve through sobriety
                  </NumberedListInput>
                </Grid>
              </Container>
            ) : null}
            {currentPage === 6 ? (
              <Container
                header={<Header variant="h2">Managing Relapse Triggers</Header>}
              >
                <Grid
                  gridDefinition={[
                    { colspan: 12 },
                    { colspan: 12 },
                    { colspan: 12 },
                    { colspan: 12 },
                  ]}
                >
                  <p>
                    Triggers are external or internal cues that induce cravings
                    and may lead to relapse.
                  </p>
                  <CheckboxList
                    defaultValues={formData.relapseTriggers}
                    onChange={(values) =>
                      setFormData({ ...formData, relapseTriggers: values })
                    }
                  >
                    <h3 className="bold">
                      Review the following list and check off your triggers,
                      adding as needed.
                    </h3>
                  </CheckboxList>
                  <h4>
                    Some triggers can be avoided; others cannot feasibly be
                    ignored (and some are altogether impossible to avoid).
                  </h4>
                  <TextareaInput
                    defaultValue={formData.q18}
                    onChange={(value) =>
                      setFormData({ ...formData, q18: value })
                    }
                  >
                    What are some strategies for{" "}
                    <span className="italic">avoiding</span> triggers?
                    (Examples: Avoid restaurants that serve alcohol, have a
                    loved one pick up your medications from the pharmacy, etc.)
                    Write one strategy for each avoidable trigger from above.
                  </TextareaInput>
                </Grid>{" "}
              </Container>
            ) : null}
            {currentPage === 7 ? (
              <Container
                header={<Header variant="h2">Managing Relapse Triggers</Header>}
              >
                <Grid
                  gridDefinition={[
                    { colspan: 12 },
                    { colspan: 12 },
                    { colspan: 12 },
                  ]}
                >
                  <TextareaInput
                    defaultValue={formData.q19}
                    onChange={(value) =>
                      setFormData({ ...formData, q19: value })
                    }
                  >
                    For the triggers you can&apos;t avoid or predict (i.e.
                    running into an old using friend, arguing with your spouse,
                    being reprimanded by your boss, etc.), what are some
                    strategies for successful coping? (Examples: Plan out what
                    you&apos;ll say ahead of time in case you run into a using
                    buddy, practice self-care, call your sponsor when feeling
                    anxious, etc.)
                  </TextareaInput>
                  <NumberedListInput
                    inputCount={5}
                    defaultValues={formData.q20}
                    onChange={(values) =>
                      setFormData({ ...formData, q20: values })
                    }
                  >
                    Who can you rely on when you&apos;re feeling triggered or
                    experiencing cravings? Write down names and numbers of
                    people you can call (who you can trust and won&apos;t judge
                    you).
                  </NumberedListInput>
                  <div>
                    <p>
                      Lastly, commit to daily self-care. By attending to your
                      most basic needs on a regular basis, you are better
                      equipped to manage triggers and cope with cravings.
                    </p>
                    <h3>Daily Self-Care</h3>
                    <ul>
                      <li>Nutritious meals and sufficient water intake</li>
                      <li>Exercise</li>
                      <li>Adequate rest</li>
                      <li>Attending to illness</li>
                    </ul>
                  </div>
                </Grid>{" "}
              </Container>
            ) : null}
            {currentPage === 8 ? (
              <Container
                header={<Header variant="h2">Managing Relapse Triggers</Header>}
              >
                <Grid
                  gridDefinition={[
                    { colspan: 12 },
                    { colspan: 12 },
                    { colspan: 12 },
                    { colspan: 12 },
                  ]}
                >
                  <div>
                    <h3>Self-Care Tips</h3>
                    <ul>
                      <li>
                        Commit to avoiding (or at least limiting) fast food,
                        sugary and/or highly caffeinated drinks, overly
                        processed foods, sweets/candy/chocolate, foods high in
                        sodium, foods with added sugar, refined carbohydrates
                        (i.e. white bread, pastries, donuts, etc.), red meat,
                        high-calorie sauces/dressings/condiments, and large
                        portions
                      </li>
                      <li>
                        Commit to increasing your intake of fruits/vegetables
                        (especially raw veggies), unsweetened tea (especially
                        green tea), beans/legumes, lean protiens, and whole
                        grains
                      </li>
                      <li>
                        The following should be enjoyed in moderation only:
                        Nuts/seeds, black coffee, heart-healthy oils, and
                        fruit/vegetable juices
                      </li>
                    </ul>
                  </div>
                  <MultiNumericInput
                    defaultValues={formData.q21}
                    onChange={(values) =>
                      setFormData({ ...formData, q21: values })
                    }
                    questions={[
                      "How many glasses of water will you drink per day?",
                    ]}
                    afterDescription={
                      <p>
                        (The average person requires a half ounce of water per
                        pound of body weight per day; this may increase or
                        decrease based on exercise and activity level.)
                      </p>
                    }
                  />
                  <MultiNumericInput
                    defaultValues={formData.q22}
                    onChange={(values) =>
                      setFormData({ ...formData, q22: values })
                    }
                    questions={[
                      "How many hours of sleep do you need per night?",
                    ]}
                    afterDescription={
                      <p>(The average person requires 6-9 hours of sleep.)</p>
                    }
                  />
                  <div>
                    <p>
                      Commit to caring for illness. When you&apos;re sick, your
                      body needs rest above all else to heal. Take time off work
                      or stay home from school. Visit your doctor or an urgent
                      care center if needed and take medications as
                      prescribed/directed.
                    </p>
                    <p className="outlined-paragraph bold">
                      Share this with a loved one (someone who supports your
                      recovery goals); give them permission to ask you about
                      your triggers/cravings and daily self-care plan. Tell them
                      how they can be supportive when you&apos;re struggling to
                      cope.
                    </p>
                  </div>
                </Grid>{" "}
              </Container>
            ) : null}
            {currentPage === 9 ? (
              <Container
                header={
                  <Header variant="h2">Resisting Temptation in Recovery</Header>
                }
              >
                <Grid
                  gridDefinition={[
                    { colspan: 12 },
                    { colspan: 12 },
                    { colspan: 12 },
                    { colspan: 12 },
                  ]}
                >
                  <TextareaInput
                    defaultValue={formData.q23}
                    onChange={(value) =>
                      setFormData({ ...formData, q23: value })
                    }
                  >
                    Think of a time you were tempted to use, but didn&apos;t
                    give in. What happened?
                  </TextareaInput>
                  <TextareaInput
                    defaultValue={formData.q24}
                    onChange={(value) =>
                      setFormData({ ...formData, q24: value })
                    }
                  >
                    How did you feel before, during, and after?
                  </TextareaInput>
                  <TextareaInput
                    defaultValue={formData.q25}
                    onChange={(value) =>
                      setFormData({ ...formData, q25: value })
                    }
                  >
                    What helped you to resist?
                  </TextareaInput>
                  <TextareaInput
                    defaultValue={formData.q26}
                    onChange={(value) =>
                      setFormData({ ...formData, q26: value })
                    }
                  >
                    Build on this experience - write about how you can use this
                    strategy again to protect your recovery. List ways you can
                    strengthen and sustain your resolve.
                  </TextareaInput>
                </Grid>
              </Container>
            ) : null}
          </div>
        </Form>
      </form>
    </>
  );
}

export default App;
