package kr.hs.dgsw.webshopping.Controller;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import kr.hs.dgsw.webshopping.Domain.Cart;
import kr.hs.dgsw.webshopping.Service.CartService;

@RestController
public class CartController {
    @Autowired
    CartService cartService;

    @PostMapping(value="/api/cart")
    public Long add(@RequestBody Cart cart){
        return cartService.add(cart);
    }

    @DeleteMapping(value="/api/cart")
    public int deleteById(@Param("id") Long id){
        return cartService.deleteById(id);
    }

    @DeleteMapping(value="/api/cart/userid")
    public int deleteByUserId(@Param("uesrid") Long id){
        return cartService.deleteByUserId(id);
    }

    @GetMapping(value="/api/cart/id")
    public Cart findById(@Param("id") Long id){
        return cartService.findById(id);
    }

    @GetMapping(value="/api/cart/userid")
    public List<Cart> findByUserId(@Param("userid") Long userid){
        return cartService.findByUserId(userid);
    }
}