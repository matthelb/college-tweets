<?php
	class Tweet_Generator {
		public $map = array();
		public $separators = array('#',',','.','!','?','@','$','%','^','&','*','(',')','-','+','=','"',':');
		public $spacers = array('.', ',',';',':','?','!');

		public function add_tweet($t){
			$m = $this->map;
			$words = $this->get_words_from_string($t);
			for($i = 0;$i<sizeof($words);$i++){
				$next = ($i+1 >= sizeof($words)) ? false : $words[$i+1];
				if(array_key_exists($words[$i], $m)){
					array_push($m[$words[$i]], $next);
				}
				else{
					$nextWords = array();
					array_push($nextWords, $next);
					$m[$words[$i]] = $nextWords;
				}
			}
			$this->map = $m;
		}

		public function generate_tweet(){
			$m = $this->map;
			$charCount = 0;
			$result = "";
			$words = array();
			$keys = array_keys($m);
			$seed = $keys[array_rand($keys)];
			$size = sizeof($seed);
			array_push($words, $seed);
			while($size < 140){
				$nextWords = $m[$seed];
				$word = $nextWords[array_rand($nextWords)];
				if($word === false) break;
				$size += sizeof($word);
				array_push($words, $word);
				$seed = $word;
			}
			for($i = 0;$i<sizeof($words);$i++) {
				if($i > 0){
					//if($words[$i-1] == '.' || )
					$result .= $words[$i]." ";
				}
			}
			return $result;
		}

		private function get_words_from_string($t){
			foreach($this->separators as $delimiter){
				$t = str_replace($delimiter, " ".$delimiter." ", $t);
			}
			$words = explode(' ', $t);
			for($i = 0;$i<sizeof($words);$i++) {
				if(is_null($words[$i]) || $words[$i] == '') array_splice($words, $i, 1);
			}
			return $words;
		}
	}
?>