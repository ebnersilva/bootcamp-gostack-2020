import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProjectsApi() {
      const response = await api.get('projects');
      setProjects(response.data);
    }

    getProjectsApi();
  }, []);

  async function handleAddNewProject() {
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Ebner Silva',
    });

    setProjects([...projects, response.data]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <Text style={styles.project}>{item.title}</Text>
          )}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={handleAddNewProject}>
          <Text style={styles.buttonText}>Adicionar Projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },
  project: {
    fontSize: 30,
    color: '#FFF',
  },
  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});
