package com.example.demo.controller;

import com.example.demo.dto.LoginRequestDTO;
import com.example.demo.dto.LoginResponseDTO;
import com.example.demo.dto.SignUpReqDTO;
import com.example.demo.utils.PasswordUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable String id) {
        return userService.getUserById(id);
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
    }

    @PostMapping("/signup")
    public ResponseEntity<User> signup(@RequestBody SignUpReqDTO signUpReqDTO) throws Exception {

        User u = userService.getUserByEmail(signUpReqDTO.getEmail());
        if (u != null) {
            throw new Exception("User already exists");
        }

        String hashedPassword = PasswordUtil.encodeSHA256(signUpReqDTO.getPassword());

        User user = new User();
        user.setName(signUpReqDTO.getName());

        user.setPassword(hashedPassword);
        user.setEmail(signUpReqDTO.getEmail());
        userService.createUser(user);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginRequestDTO loginRequestDTO) throws Exception {
        User user = userService.getUserByEmail(loginRequestDTO.getEmail());
        if(user == null){
            throw  new Exception("user not exists, please sign in first");
        }
        String rawPasswordHash = PasswordUtil.encodeSHA256(loginRequestDTO.getPassword());
        boolean isMatch = rawPasswordHash.equals(user.getPassword());
        if(!isMatch){
            throw  new Exception("password not match");
        }
        LoginResponseDTO loginResponseDTO = new LoginResponseDTO();
        loginResponseDTO.setToken("fajhsd2873482");
        loginResponseDTO.setUsername(user.getName());
        loginResponseDTO.setEmail(user.getEmail());
        loginResponseDTO.setUserId(user.getId());
        return ResponseEntity.ok(loginResponseDTO);
    }

}
