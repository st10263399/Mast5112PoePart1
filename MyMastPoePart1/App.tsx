import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import logo from './node_modules/images/Logo.jpg'; 
import backgroundImage from './node_modules/images/Background.jpg'; 



// Sample data for books (replace with your data fetching logic)
const sampleBooks = [
  { id: 1, title: 'Book 1', pages: 200 },
  { id: 2, title: 'Book 2', pages: 250 },
  { id: 3, title: 'Book 3', pages: 180 },
];

function HomeScreen() {
  const [lastBook, setLastBook] = useState(null);
  const [totalPagesRead, setTotalPagesRead] = useState(0);
  const [averagePages, setAveragePages] = useState(0);

  // Fetch and calculate data
  useEffect(() => {
    // Fetch the last book from your data (e.g., the book with the highest ID)
    const lastReadBook = sampleBooks.reduce((prev, current) =>
      prev.id > current.id ? prev : current
    );

    setLastBook(lastReadBook);

    // Calculate total pages and average pages
    const totalPages = sampleBooks.reduce((total, book) => total + book.pages, 0);
    const average = totalPages / sampleBooks.length;

    setTotalPagesRead(totalPages);
    setAveragePages(average);
  }, []);

  return (
    <View style={styles.container}>
       {/* Background Image */}
       <Image source={backgroundImage} style={styles.backgroundImage} />

      {/* Logo */}
       <Image source={logo} style={styles.logo} />

     
      {/* Display last book details */}
      {lastBook && (
        <View style={styles.bookDetails}>
          <Text style={styles.heading}>SmartBooks</Text>
          <Text style={styles.title}>Last Book Read:</Text>
          <Text>Title: {lastBook.title}</Text>
          <Text>Pages: {lastBook.pages}</Text>
        </View>
      )}
      

      {/* Display total pages read */}
      <View style={styles.stats}>
        <Text style={styles.title}>Total Pages Read:</Text>
        <Text>{totalPagesRead} pages</Text>
      </View>

      {/* Display average pages */}
      <View style={styles.stats}>
        <Text style={styles.title}>Average Pages per Book:</Text>
        <Text>{averagePages} pages</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Library')}
      >
        <Text style={styles.buttonText}>Browse Library</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  heading:{ 
    fontFamily:'arial',
    fontStyle:'italic',
    fontWeight:'bold',

  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logo: {
    marginTop: 20,
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  bookDetails: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  stats: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default HomeScreen;
