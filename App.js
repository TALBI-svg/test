/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  FlatList,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import colors from './assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import popularProductData from './assets/Data/popularProductData';
import categoriesData from './assets/Data/categoriesData';
import checkMoreData from './assets/Data/checkMoreData';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function App ()  {
const renderProductData = ({item}) => {
  return(
    <TouchableOpacity>
    <View style={styles.ProductContentArea}>
      <View style={styles.WrapperProductContentAreaRating}>
        <View style={styles.ProductContentAreaRating}>
          <FontAwesome name="star" size={15} color={colors.yellow} style={styles.ProductContentAreaRatingIcon}/>
          <Text style={styles.ProductContentAreaRatingText}>{item.rating}</Text>
        </View>
      </View>

      <View  style={styles.WrapperProductContentAreaImage}>
        <Image source={item.image} style={styles.ProductContentAreaImage}/>
      </View>

      <View style={styles.WrapperProductContentAreaproductType}>
        <Text style={styles.ProductContentAreaproductType}>{item.productType}</Text>
      </View>
       
      <View style={styles.WrapperProductContentAreaBottom}>
        <View style={styles.ProductContentAreaBottomLeft}>
          <Text style={styles.ProductContentAreaBottomLeftTitle}>{item.title}</Text>
          <Text style={styles.ProductContentAreaBottomSubLeftTitle}>{item.subTitle}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="add-circle" size={30} color={colors.primary} style={styles.ProductContentAreaBottomRightIcon}/>
        </TouchableOpacity>
      </View>

      <View style={styles.WrapperProductContentAreaPrice}>
        <Text style={styles.ProductContentAreaPrice}>{item.price} $</Text>
      </View>

      
      
    </View>
    </TouchableOpacity>
  );
};
const renderCategoData = ({item}) => {
  return(
    <TouchableOpacity>
    <View style={styles.Categories}>
      <Image source={item.image} style={styles.CategoriesImage}/>
      <View style={styles.CategoriesRight}>
        <Text style={styles.CategoriesRightName}>{item.name}</Text>
        <Text style={styles.CategoriesRightType}>{item.type}</Text>
      </View>
    </View>
    </TouchableOpacity>
  
 )
}
const renderChackData = ({item}) => {
  return(
    <TouchableOpacity>
    <View style={styles.CheckMoreArea}>
      <View style={styles.CheckMoreAreaTop}>
        <Image source={item.image} style={styles.CheckMoreAreaTopImage}/>

        <View style={styles.CheckMoreAreaTopRight}>
          <Text style={styles.CheckMoreAreaTopRightText}>{item.name}</Text>
          <View style={styles.CheckMoreAreaTopRightDetails}>
            <Text style={styles.CheckMoreAreaTopRightDetailsRating}>{item.rating} Vp</Text>
            <FontAwesome name="star" size={15} color={colors.yellow} style={styles.CheckMoreAreaTopRightDetailsIcon}/>
            <FontAwesome name="star" size={15} color={colors.light} style={styles.CheckMoreAreaTopRightDetailsIcon}/>
            <FontAwesome name="star" size={15} color={colors.light} style={styles.CheckMoreAreaTopRightDetailsIcon}/>
          
          </View>
        </View>

      </View>
      {/*AboutAera*/}
      <View style={styles.WrapperAboutAera}>
        <Text style={styles.WrapperAboutAeraTitle}>{item.titleAbout}</Text>
        <Text style={styles.WrapperAboutAeraDescripe}>{item.descripeAbout}</Text>
      </View>
       {/*ProdcutsTypes*/}
       <View style={styles.WrapperProdcutsTypes}>
         <Text style={styles.ProdcutsTypesText}>Prodcuts Type</Text>
         <View style={styles.ProdcutsTypesBottom}>
           <View style={styles.ProdcutsTypesBottomLetf}>
             <Text style={styles.ProdcutsTypesBottomLetfText}>{item.type1}</Text>
             <Text style={styles.ProdcutsTypesBottomLetfText}>{item.type2}</Text>
             <Text style={styles.ProdcutsTypesBottomLetfText}>{item.type3}</Text>
           </View>
         <TouchableOpacity>
             <Text style={styles.ProdcutsTypesBottomRightText}>Follow</Text>
           </TouchableOpacity>
         </View>
       </View>
    </View>
    </TouchableOpacity>
  )
}
  return (
    <View style={styles.containner}>
      {/*HeaderArea*/}
      <View style={styles.WrapperHeaderArea}>
        <Text style={styles.HeaderAreaText}>Explor Product's</Text>
        <Image source={require('./assets/images/user.png')} style={styles.HeaderAreaImage}/>
      </View>
      {/*SearchArea*/}
      <View style={styles.WrapperSearchArea}>
        <View style={styles.SearchAreaTop}>
          <Ionicons name="search" size={20} color={colors.light} style={styles.SearchAreaTopIcon} />
          <TextInput
          style={styles.SearchAreaTopInput}
          //onChangeText={onChangeNumber}
          //value={number}
          placeholder="Search Here"
          placeholderTextColor={colors.light}
          keyboardType="default"
          />
        </View>
        <TouchableOpacity>
          <Ionicons name="options" size={20} color={colors.textDark} style={styles.SearchAreaBottomIcon} />
        </TouchableOpacity>
      </View>
      
      {/*ProductTitleArea*/}
      <View style={styles.WrapperProductTitleArea}>
        <View style={styles.ProductTitleAreaLetf}>
          <Image source={require('./assets/images/fire.png')} style={styles.ProductTitleAreaLetfImage}/>
          <Text style={styles.ProductTitleAreaLetfText}>Popular Product's</Text>

        </View>
        <View style={styles.ProductTitleAreaRight}>
        
          {/*this touchab's => button's */}
          <TouchableOpacity style={styles.ProductTitleAreaRightTouchab}>
            <FontAwesome name="circle" size={15} color={colors.primary}/>

          </TouchableOpacity>
          <TouchableOpacity style={styles.ProductTitleAreaRightTouchab}>
            <FontAwesome name="circle" size={15} color={colors.lightTwo}/>

          </TouchableOpacity>
          <TouchableOpacity style={styles.ProductTitleAreaRightTouchab}>
            <FontAwesome name="circle" size={15} color={colors.lightTwo}/>

          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentInsetAdjustmentBehavior='automatic' showsVerticalScrollIndicator={false} >
      {/*ProductContentArea*/}
      <View style={styles.WrapperProductContentArea}>
      <FlatList
        data={popularProductData }
        renderItem={renderProductData}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      </View>
      {/*CategoriesArea*/}
      <View style={styles.WrapperCategories}>
       <Text style={styles.CategoriesTitle}>Categories</Text>
       <FlatList
        data={categoriesData}
        renderItem={renderCategoData}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
       />
      </View>
      {/*CheckMoreArea*/}
      <View style={styles.WrapperCheckMoreArea}>
        <Text style={styles.CheckMoreAreaTile}>Check more ...</Text>
        <FlatList
        data={checkMoreData}
        renderItem={renderChackData}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
       />


      </View>

      
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containner: {
    backgroundColor:colors.backgroundScreen,
    flex:1,
    height: hp('100%'), // 100% of height device screen
    width: wp('100%'),  // 100% of width device screen
  },
  WrapperHeaderArea: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20,
    marginHorizontal:10,
   
  },
  HeaderAreaImage: {
    backgroundColor:colors.primaryOne,
    borderRadius:30,
    width:40,
    height:40,
  },
  HeaderAreaText: {
    fontFamily:'Roboto-Bold',
    fontSize:18,
    color:colors.textDark,
  },
  WrapperSearchArea: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:15,
    marginHorizontal:10,
    //borderWidth:1,
    //borderColor:colors.textDark,
  }, 
  SearchAreaTop: {
    flexDirection:'row',
    alignItems:'center',
    //justifyContent:'space-between',
    backgroundColor:colors.background,  
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5,
    paddingLeft:10,

  },
  SearchAreaTopIcon: {},
  SearchAreaTopInput: {
    width:'80%', 
    color:colors.textDark,
    fontSize:12,
    fontFamily:'Roboto-Regular',
    paddingLeft:10,
    

  },
  SearchAreaBottomIcon: {
    paddingHorizontal:16,
    paddingVertical:13,
    backgroundColor:colors.lightOne,
    borderTopRightRadius:5,
    borderBottomRightRadius:5,

  },
  WrapperProductTitleArea: {
    //example designe width and height for every element in side out our application
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:15,
    marginHorizontal:10,
  }, 
  ProductTitleAreaLetf: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  }, 
  ProductTitleAreaLetfImage: {
    width:20,
    height:20,
  }, 
  ProductTitleAreaLetfText: {
    color:colors.textDark,
    fontFamily:'Roboto-Bold',
    fontSize:16,
    marginHorizontal:5,
  }, 
  ProductTitleAreaRight: {
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:colors.lightOne,
    padding:4,
    borderRadius:15,
    borderWidth:1,
    borderColor:colors.light,

  },
  ProductTitleAreaRightTouchab: {
    marginHorizontal:5,
    
  },
  WrapperProductContentArea: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:15,
    marginHorizontal:10,

  },
  ProductContentArea: {
    backgroundColor: colors.background,
    width:150,
    height:223,
    marginRight:10,
    borderRadius:10,
  },
  WrapperProductContentAreaRating: {
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    marginVertical:5,
    marginHorizontal:5,

  },
  ProductContentAreaRating: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'30%',
    paddingHorizontal:3,
    borderRadius:10,

  }, 
  ProductContentAreaRatingIcon: {}, 
  ProductContentAreaRatingText: {
    color:colors.textDark,
    fontFamily:'Roboto-Medium',
    fontSize:14,

  },
  WrapperProductContentAreaImage: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  ProductContentAreaImage: {
    width:100,
    height:100,
  },
  WrapperProductContentAreaproductType: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:5,
    marginHorizontal:10,
    backgroundColor:colors.secondary,
    width:'27%',
    padding:2,
    paddingHorizontal:6,
    borderRadius:5,

  }, 
  ProductContentAreaproductType: {
    color:colors.background,
    fontFamily:'Roboto-Medium',
    fontSize:12,
  },
  WrapperProductContentAreaBottom: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    //marginTop:5,
    marginHorizontal:10,

  },
  ProductContentAreaBottomLeft: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start',
    marginTop:5,
    //marginHorizontal:10,
  },
  ProductContentAreaBottomLeftTitle: {
    color:colors.textDark,
    fontFamily:'Roboto-Bold',
    fontSize:14,
  },
  ProductContentAreaBottomSubLeftTitle: {
    color:colors.light,
    fontFamily:'Roboto-Medium',
    fontSize:10,
  },
  ProductContentAreaBottomRightIcon: {},
  WrapperProductContentAreaPrice: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start',
    marginHorizontal:10,

  }, 
  ProductContentAreaPrice: {
    color:colors.textDark,
    fontFamily:'Roboto-Bold',
    fontSize:10,
  },
  WrapperCategories: {
    marginTop:15,
    marginHorizontal:10,

  }, 
  CategoriesTitle: {
    color:colors.textDark,
    fontFamily:'Roboto-Bold',
    fontSize:16,
  },
  Categories: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:15,
    backgroundColor:colors.background,
    marginRight:10,
    width:150,
    height:65,
    paddingHorizontal:10,
    paddingVertical:10,
    borderRadius:10,
  },
  CategoriesImage: {
    width:40,
    height:40,
  },
  CategoriesRight: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,
  },
  CategoriesRightName: {
    color:colors.textDark,
    fontFamily:'Roboto-Bold',
    fontSize:14,


  },
  CategoriesRightType: {
    color:colors.light,
    fontFamily:'Roboto-Bold',
    fontSize:11,

  },
  WrapperCheckMoreArea: {
    marginHorizontal:10,
    marginTop:15,
    marginBottom:50,
  }, 
  CheckMoreAreaTile: {
    color:colors.textDark,
    fontFamily:'Roboto-Bold',
    fontSize:16,
  },
  CheckMoreArea: {
    marginTop:15,
    backgroundColor:colors.background,
    borderRadius:10,
    width:250,
    height:290,
    marginRight:10,
    padding:5,

  },
  CheckMoreAreaTop: {
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
  }, 
  CheckMoreAreaTopImage: {
    width:50,
    height:50,
    borderRadius:30,
  }, 
  CheckMoreAreaTopRight: {
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    marginLeft:15,
  },
  CheckMoreAreaTopRightText: {
    color:colors.textDark,
    fontFamily:'Roboto-Bold',
    fontSize:14,

  }, 
  CheckMoreAreaTopRightDetails: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  }, 
  CheckMoreAreaTopRightDetailsRating: {
    marginRight:10,
    color:colors.light,
    fontFamily:'Roboto-Bold',
    fontSize:12,

  },
  CheckMoreAreaTopRightDetailsIcon: {
    marginHorizontal:2,
  },
  WrapperAboutAera: {
    backgroundColor:colors.lightTwo,
    marginHorizontal:5,
    paddingHorizontal:4,
    paddingVertical:2,
    borderRadius:5,
    marginTop:10,
    width:228,
    height:100,
  },
  WrapperAboutAeraTitle: {
    color:colors.textDark,
    fontFamily:'Roboto-Bold',
    fontSize:12,

  }, 
  WrapperAboutAeraDescripe: {
    color:colors.light,
    fontFamily:'Roboto-Regular',
    fontSize:13,
  },
  WrapperProdcutsTypes: {
    marginHorizontal:6,
    marginTop:10,
  },  
  ProdcutsTypesText: {
    color:colors.textDark,
    fontFamily:'Roboto-Bold',
    fontSize:12,
  },
  ProdcutsTypesBottom: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  }, 
  ProdcutsTypesBottomLetf: {
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    marginTop:5,
  }, 
  ProdcutsTypesBottomLetfText: {
    backgroundColor:colors.lightOne,
    marginVertical:2,
    color:colors.background,
    padding:2,
    paddingHorizontal:4,
    borderRadius:5,
  },
  ProdcutsTypesBottomRightText: {
    backgroundColor:colors.textDark,
    marginVertical:2,
    color:colors.background,
    padding:2,
    paddingHorizontal:4,
    borderRadius:5,

  },

});


