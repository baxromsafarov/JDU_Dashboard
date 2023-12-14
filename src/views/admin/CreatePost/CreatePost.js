import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/CreatePost.css';
import SearchGroup from './components/SearchGroup';
import {
    Avatar,
    Box,
    Flex,
    FormLabel,
    Icon,
    Select,
    SimpleGrid,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { ChevronDownIcon,  } from '@chakra-ui/icons'
  import { Input } from "@chakra-ui/react"
  import React from "react";
  import { useState } from "react";
  import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
    
  } from "@chakra-ui/react"
import Categories from './components/Categories';
import CustomDatePicker from './components/DatePickerPost';
import GroupChooser from './components/GroupChooser';
import RichTextArea from './components/TextArea';

export default function CreatePost(){
  
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const [value, setValue] = useState('');
  const handleChange = (event) => setValue(event.target.value);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ }}
        gap='20px'
        mb='20px'>
            
           <div className="create-post container mt-4">
              <form className='
              post-form'>
                
                <div className="create-message">
                    <div className="message-header">
                        <Input placeholder="Your post here" borderRadius="5px" md=""/>
                    </div>
                    <div className="message-body">
                        
                        {/* <Input
                            value={value}
                            onChange={handleChange}
                            placeholder="Your message..."
                            size="sm"
                            borderRadius="10px"
                         />  */}
                        <div className="mb-3">
                            
                            <div className='text-header'>
                                <Menu closeOnSelect={false}>
                                <MenuButton colorScheme="brand">
                                    Normal
                                    <Icon as={ChevronDownIcon} width='20px' height='20px' color='inherit' />
                                </MenuButton>
                                <MenuList minWidth="240px">
                                    <MenuOptionGroup defaultValue="Normal" title="Font Size" type="radio">
                                    <MenuItemOption value="heading-1">Heading 1</MenuItemOption>
                                    <MenuItemOption value="heading-2">Heading 2</MenuItemOption>
                                    <MenuItemOption value="heading-3">Heading 3</MenuItemOption>
                                    </MenuOptionGroup>
                                </MenuList>
                                </Menu>
                            </div>
                            {/* <RichTextArea/> */}
                            <textarea className="form-control" placeholder="Your message..." id="postContent" rows="15" value={value} onChange={handleChange}></textarea>
                            <div class="mb-3">
                                <label for="file" class="form-label"></label>
                                <input type="file" class="form-control" id="file" name="file" required/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='post-selection'>
                    <div className='category'>
                        <div className='gr-sel'><SearchGroup /></div>
                        <div className='post-important'>
                          <div class="btns-group">
                            <input type="radio" class="btn-check" name="importans" id="option1" value={'high'} autocomplete="off"  />
                            <label class="btn btn-1 btn-secondary" for="option1">High</label>

                            <input type="radio" class="btn-check" name="importans" id="option2" value={'medium'} autocomplete="off" />
                            <label class="btn btn-2 btn-secondary" for="option2">Medium</label>

                            <input type="radio" class="btn-check" name="importans" id="option3" value={'low'} autocomplete="off" />
                            <label class="btn btn-3 btn-secondary" for="option3">Low</label>
                          </div>
                        </div>
                        <div className='post-cat'><Categories /></div>
                        <div className='post-date'><CustomDatePicker /></div>
                        <div className='save-btns'>
                          {/* <button type="button" class="btn btn-outline-primary">
                          <span class="material-symbols-outlined">save</span>
                            <span>Save Draft</span>
                          </button> */}
                          <button type="button" class="btn btn-primary">
                            <span class="material-symbols-outlined">publish</span>
                            <span>Publish</span>
                            </button>
                        </div>
                    </div>
                    <div className='post-group'>
                      <div className='gr-sel'><SearchGroup /></div>
                      <div className='group-chooser'><GroupChooser /></div>
                    </div>
                    <button type="button" class="btn btn-outline-primary">
                          <span class="material-symbols-outlined">save</span>
                            <span>Save Draft</span>
                          </button>
                </div>
                          
              </form>
           </div>
        
      </SimpleGrid>
    </Box>
  );
}

// import React, { useState } from 'react';


// const CreatePost = () => {
//   const [image, setImage] = useState(null);
//   const [fontSize, setFontSize] = useState('medium');
//   const [content, setContent] = useState('');
//   const [links, setLinks] = useState('');

//   const handleImageChange = (e) => {
//     const selectedImage = e.target.files[0];
//     setImage(selectedImage);
//   };

//   const handleFontSizeChange = (e) => {
//     setFontSize(e.target.value);
//   };

//   const handleContentChange = (e) => {
//     setContent(e.target.value);
//   };

//   const handleLinksChange = (e) => {
//     setLinks(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Process the form data (e.g., send it to the server)
//     console.log({
//       image,
//       fontSize,
//       content,
//       links: links.split(',').map(link => link.trim()), // Convert comma-separated links to an array
//     });

//     // Reset the form fields
//     setImage(null);
//     setFontSize('medium');
//     setContent('');
//     setLinks('');
//   };

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center">Add Post</h1>

//       <form onSubmit={handleSubmit}>
//         {/* Image Input */}
//         <div className="mb-3">
//           <label htmlFor="imageInput" className="form-label">Upload Image</label>
//           <input type="file" className="form-control" id="imageInput" accept="image/*" onChange={handleImageChange} />
//         </div>

//         {/* Font Size Dropdown */}
//         <div className="mb-3">
//           <label htmlFor="fontSizeDropdown" className="form-label">Choose Font Size</label>
//           <select className="form-select" id="fontSizeDropdown" value={fontSize} onChange={handleFontSizeChange}>
//             <option value="small">Small</option>
//             <option value="medium">Medium</option>
//             <option value="large">Large</option>
//           </select>
//         </div>

//         {/* Post Content Textarea */}
//         <div className="mb-3">
//           <label htmlFor="postContent" className="form-label">Post Content</label>
//           <textarea className="form-control" id="postContent" rows="4" value={content} onChange={handleContentChange}></textarea>
//         </div>

//         {/* Links Input */}
//         <div className="mb-3">
//           <label htmlFor="linksInput" className="form-label">Add Links</label>
//           <input type="text" className="form-control" id="linksInput" placeholder="Enter links separated by commas" value={links} onChange={handleLinksChange} />
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="btn btn-primary">Add Post</button>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;
