import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <ImageBackground
        style={{
          flex: 1,
          resizeMode: "contain"
        }}
        source={{ uri: "https://images.unsplash.com/photo-1624293547285-d892edcc8bdc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" }}
      >
        <View style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginHorizontal: 20,
          marginTop: 20
        }}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
          <View style={{
            width: 30,
            height: 30,
            borderRadius: 999,
            backgroundColor: "#FFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Ionicons name="heart-outline" color="gray" size={20} />
          </View>
        </View>
        <ScrollView style={{
          backgroundColor: "#00a7fa",
          borderTopRightRadius: 45,
          borderTopLeftRadius: 45,
          marginTop: 120
        }}>

          <View style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20
          }}>
            <TouchableOpacity style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "yellow",
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 45
            }}>
              <Text style={{
                marginRight: 20,
                fontWeight: "bold"
              }}>Book now</Text>
              <Ionicons name="arrow-forward-circle-outline" color="blue" size={24} />
            </TouchableOpacity>
          </View>

          <View style={{
            marginHorizontal: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            flexDirection: "row"
          }}>

            <View style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              borderRadius: 18,
              backgroundColor: "blue",
              paddingHorizontal: 15,
              paddingVertical: 15
            }}>
              <Ionicons style={{
                marginRight: 40
              }} name="cash-outline" size={24} color="#FFF" />
              <View style={{
                marginRight: 20
              }}>
                  <Text style={{
                    color: "#FFF"
                  }}>$ 48</Text>
                  <Text style={{
                    color: "gray"
                  }}>Price</Text>
              </View>
            </View>

            <View style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              borderRadius: 18,
              backgroundColor: "blue",
              paddingHorizontal: 15,
              paddingVertical: 15
            }}>
              <Ionicons style={{
                marginRight: 40
              }} name="time-outline" size={24} color="#FFF" />
              <View style={{
                marginRight: 20
              }}>
                  <Text style={{
                    color: "#FFF"
                  }}>2 hours</Text>
                  <Text style={{
                    color: "gray"
                  }}>Duration</Text>
              </View>
            </View>

          </View>

          <View style={{
            marginHorizontal: 20,
            alignItems: "flex-start",
            marginTop: 30
          }}>
            <Text style={{
              color: "#FFF",
              fontWeight: "bold",
              letterSpacing: 3
            }}>Description</Text>
            <Text style={{
              color: "black",
              marginTop: 5
            }}>
              Lorem ipsum dolor sit amet consectetur
               adipisicing elit. Explicabo tenetur
            </Text>
          </View>

            <View style={{
              marginHorizontal: 20,
              marginTop: 20
            }}>
              <Text style={{
                color: "#FFF",
                fontWeight: "bold",
                letterSpacing: 3
              }}>Gallery</Text>
            </View>

            <View style={{
              marginHorizontal: 20,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              flexWrap: "wrap"
            }}> 
                <Image
                  style={{
                    width: 150,
                    height: 200,
                    borderRadius: 15,
                    marginBottom: 20
                  }}
                  source={{ uri: "https://images.unsplash.com/photo-1571164053700-a06b317567c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" }} 
                />
                <Image
                  style={{
                    width: 150,
                    height: 200,
                    borderRadius: 15,
                    marginBottom: 20
                  }}
                  source={{ uri: "https://images.unsplash.com/photo-1571164053700-a06b317567c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" }} 
                />
                <Image
                  style={{
                    width: 150,
                    height: 200,
                    borderRadius: 15,
                    marginBottom: 20
                  }}
                  source={{ uri: "https://images.unsplash.com/photo-1571164053700-a06b317567c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" }} 
                />
                <Image
                  style={{
                    width: 150,
                    height: 200,
                    borderRadius: 15,
                    marginBottom: 20
                  }}
                  source={{ uri: "https://images.unsplash.com/photo-1571164053700-a06b317567c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" }} 
                />
                
            </View>

        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
