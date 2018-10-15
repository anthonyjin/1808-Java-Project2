package com.revature.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.pojos.Recipe;
import com.revature.service.RecipeService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RecipeController {

	@Autowired
	private RecipeService recipeService;
	
	@RequestMapping(value="/register", method=RequestMethod.GET, produces="application/json")
	public List<Recipe> recipeGetAll(HttpSession sess) {
		System.out.println("In recipeGetAll");
		return recipeService.getAllRecipes();
	}
	
	@RequestMapping(value="/register/{id}", method=RequestMethod.POST, produces="application/json")
	public Recipe recipeGet (HttpSession sess, @PathVariable(value="id") Integer id) {
		System.out.println("In recipeGet");
		return recipeService.getRecipe(id);
	}
}