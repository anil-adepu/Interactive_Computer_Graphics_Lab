// A simple clone of break out game

package my_main;

import javax.swing.JFrame;

public class game_main {
	
	public static final int WIDTH = 840 , HEIGHT = 560;
	
	public static void main( String[] args ) {
		runner();
	}

	public static void runner() {
		JFrame theFrame =  new JFrame("ARCADE'S _FASAK_BREAK_OUT_GAME_");

		//		Jframe.add();

		game_panel PanelObj = new game_panel();
		
		Thread ThreadObj = new Thread(PanelObj);
		
		theFrame.setSize(WIDTH , HEIGHT);
		theFrame.setLocationRelativeTo(null);
		theFrame.setResizable(false);
		
		theFrame.add(PanelObj);
		ThreadObj.start();
		
		theFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		theFrame.setVisible(true);
	}

}
