import Hero from "./components/Hero";
import Title from "./components/Title";
import SearchField from "./components/SearchField";
import TextInput from "./components/TextInput";
import SearchButton from "./components/SearchButton";

function App() {
  return (
    <div className="App">
        <Hero>
            <Title>IP Address Tracker</Title>
            <SearchField>
                <TextInput defaultValue='Search for any IP Address or domain' />
                <SearchButton>▷</SearchButton>
            </SearchField>
        </Hero>
    </div>
  );
}

export default App;
