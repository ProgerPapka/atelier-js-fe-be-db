package com.dreamteam.atelier.service;

import com.dreamteam.atelier.model.domain.User;
import com.dreamteam.atelier.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
3
@Service
@RequiredArgsConstructor
public class CustomDetailService implements UserDetailsService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        Optional<User> userByLogin = userRepository.findUserByLogin(login);
        if(userByLogin.isPresent()) {
            return org.springframework.security.core.userdetails.User
                    .builder()
                    .username(userByLogin.get().getLogin())
                    .password(bCryptPasswordEncoder.encode(userByLogin.get().getPassword()))
                    .roles(userByLogin.get().getUserRole().getRole())
                    .build();
        } else {
            throw new UsernameNotFoundException("User hasn't been find!!!");
        }
    }
}
